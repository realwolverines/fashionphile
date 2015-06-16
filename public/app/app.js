(function(){
  'use strict';

var app = angular.module('fashionphile', [ 'ui.router', 'ngRoute']);

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
          url: '/customer',
          templateUrl : 'app/customer/customerView.html',
          controller  : 'CustomerCtrl'
      })
      .state('employee', {
          url: '/employee',
          templateUrl : 'app/employee/employeeView.html',
          controller  : 'EmployeeCtrl'
      })
      .state('stats', {
          url: '/stats',
          templateUrl : 'app/stats/statsView.html',
          controller  : 'StatsCtrl'
      })

  });

})();
