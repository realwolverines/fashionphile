(function(){
  'use strict';

var app = angular.module('fashionphile', [ 'ui.router', 'weekly.barchart', 'editer', 'ui.tree', 'toaster', 'sliderDir', 'ui.bootstrap']);

//config
app
  // .run(function($state,$rootScope){
  //   $rootScope.$state = $state;
  // })

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('login', {
          url: '/',
          templateUrl : 'app/login/loginView.html',
          controller  : 'LoginCtrl'
      })
      .state('selection', {
          url: '/selection',
          templateUrl : 'app/selection/selectionView.html',
          controller  : 'SelectionCtrl',
          resolve: {
            locations: function($q, SelectionService) {
              var deferred = $q.defer();
                  SelectionService.getLocations()
                    .then(function(locations) {
                      deferred.resolve(locations);
                  });
                  return deferred.promise;
              }
            }
      })
      .state('customer', {
          url: '/customer/:id',
          templateUrl : 'app/customer/customerView.html',
          controller  : 'CustomerCtrl',
          resolve: {
            customerLocation: function($q, $state, $stateParams, SelectionService) {
              var nameParam = $stateParams.id; 
              var deferred = $q.defer();
                  SelectionService.getLocationByParam(nameParam)
                    .then(function(location) {
                      var currentLocation = location[0];
                      deferred.resolve(currentLocation);
                  });
                  return deferred.promise;
              }
          }
      })
      .state('employee', {
          url: '/employee/:location',
          templateUrl : 'app/employee/employeeView.html',
          controller  : 'EmployeeCtrl',
          resolve: {
            customers: function($state, $stateParams, CustomerService, $q){
              var location = $stateParams.location; 
              var dfd = $q.defer(); 
                CustomerService.getCustomers(location)
                  .then(function(customers){
                    dfd.resolve(customers); 
                  }); 
                return dfd.promise; 
              }
          }
      })
      .state('walldisplay', {
          url: '/walldisplay/:location',
          templateUrl : 'app/wallDisplay/wallDisplayView.html',
          controller  : 'WallDisplayCtrl',
          resolve: {
            customers: function($state, $stateParams, CustomerService, $q){
              var location = $stateParams.location; 
              var dfd = $q.defer(); 
                CustomerService.getCustomers(location)
                  .then(function(customers){
                    dfd.resolve(customers); 
                  }); 
                return dfd.promise; 
              }
          }
      })
      .state('admin', {
          url: '/admin',
          templateUrl : 'app/admin/adminView.html',
          controller  : 'adminCtrl',
          resolve: {
            adminStats: function(adminService, $q){
              var dfd = $q.defer();
                adminService.getStats()
                .then(function(adminStats){
                  dfd.resolve(adminStats[0]);
                });
              return dfd.promise;
            },
            locations: function($q, SelectionService) {
              var deferred = $q.defer();
                  SelectionService.getLocations()
                    .then(function(locations) {
                      deferred.resolve(locations);
                    });
                  return deferred.promise;
              }
          }
      })

      .state('dashboard', {
          url: '/dashboard/:id',
          templateUrl : 'app/dashboard/dashboardView.html',
          controller  : 'dashboardCtrl',
          resolve: {
            stats: function(adminService, $q, $stateParams){
              var location = $stateParams.id; 
              var dfd = $q.defer();
                adminService.getStatsByLocation(location)
                .then(function(stats){
                  console.log("dashboard routers stats.data is", stats.data); 
                  dfd.resolve(stats.data[0]);
                });
              return dfd.promise;
            },
            customerLocation: function($q, $state, $stateParams, SelectionService) {
              var nameParam = $stateParams.id; 
              console.log('nameparam', nameParam)
              var deferred = $q.defer();
                SelectionService.getLocationByParam(nameParam)
                  .then(function(location) {
                    var currentLocation = location[0];
                    deferred.resolve(currentLocation);
                });
                return deferred.promise;
            }
          }
      }); 
  });

})();