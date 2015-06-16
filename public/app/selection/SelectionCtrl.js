(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($routeParams, $timeout, $route, $window, $q, $http, $scope){
	$scope.locations = [{ id:0, name: "San Francisco" }, { id:1, name: "Beverly Hills" },  { id:2, name: "Carlsbad" }];
    // $scope.hobbies = [{ id:0, hobby: "Dodgeball" }, { id:1, hobby: "Watching old people" },  { id:2, hobby: "eatin beav" }];


// console.log($window.location);


// var currentStore = $window.location.hash.substr(2, $window.location.hash.length)

// var dfd = $q.defer(); 



});

})();
