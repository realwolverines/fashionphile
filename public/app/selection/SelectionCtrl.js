(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($routeParams, $timeout, $route, $window, $q, $http){

console.log($window.location);


var currentStore = $window.location.hash.substr(2, $window.location.hash.length)

var dfd = $q.defer(); 



});

})();
