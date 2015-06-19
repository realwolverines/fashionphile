(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($scope, locations, $routeParams, $timeout, $route, $window, $q, $http){
	

	$scope.locations = locations;

	console.log($window.location);
	var currentStore = $window.location.hash.substr(2, $window.location.hash.length)

})

})();
