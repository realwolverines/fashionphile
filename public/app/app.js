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
          controller  : 'SelectionCtrl'
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
      .state('/:location', {
        url: '/:location',
        templateUrl: './wallDisplay/wallDisplayView.html',
        controller: 'WallDisplayCtrl',
        resolve: {
          queue: function(CustomerService){
            if(res.location === $state.params){

            }
          }
        }
      })
      .state('walldisplay', {
          url: '/walldisplay',
          templateUrl : 'app/wallDisplay/wallDisplayView.html',
          controller  : 'WallDisplayCtrl'
      });
      
});

})();
