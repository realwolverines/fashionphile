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
                      console.log(locations);
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
            customerData: function($q, SelectionService) {
              var deferred = $q.defer();
                  SelectionService.getLocations()
                    .then(function(locations) {
                      console.log(locations);
                      deferred.resolve(locations);
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
              var location = $state.params.id;
                //code here for resolve
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
