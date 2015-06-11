(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('LoginCtrl', function($scope, LoginService){

		$scope.login = function(user){
			LoginService.login(user); 
		};

		$scope.signup = function(user)	 {
			LoginService.signup(user); 
		};

});

})();
