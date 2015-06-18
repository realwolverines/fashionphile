(function(){
  'use strict'; 

var app = angular.module('fashionphile', [ 'ui.router', 'editer']);

//config
app
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
              console.log('nameparam', nameParam)
              var deferred = $q.defer();
                  SelectionService.getLocationByParam(nameParam)
                    .then(function(location) {
                      console.log('app', location[0]);
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
            customers: function($state, $stateParams, CustomerService){
              var location = $stateParams.location; 
              CustomerService.getCustomers(location); 
              $scope.customers = customers; 
            }
          }
      })
      .state('stats', {
          url: '/stats',
          templateUrl : 'app/stats/statsView.html',
          controller  : 'StatsCtrl'
      })

  });

})();
