(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('LoginCtrl', function($scope, $location, LoginService){

	$scope.login = function() {
		UsersService.login($scope.email, $scope.password).then(function() {
			$location.path('/home');
		}).catch(function(err) {
			$scope.error = err;
		});;
	};

});


app.controller('LoginCtrl', function($scope, $http, $q, API){
	$scope.login = function(user){
		var dfd = $q.defer;
		$http({
			method: 'POST', 
			url: '/api/users/auth', //url always needs initial slash
			data: {
				userName: user.name,
				password: user.password
			}
		})
		.then(function(res) {
			dfd.resolve(res); 
		});
		console.log("Logged in ", user); 
		return dfd.promise;
		}
	});
})();