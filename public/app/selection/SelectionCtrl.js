(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($scope, locations, $routeParams, $location, $timeout, $route, $window, $q, $http){
  $scope.locations = locations;
  console.log(locations); 


  // $scope.viewSubmit = function(location, view){
  //   SelectionService.goToPage(location, view); 
  // };

  $scope.goToPage = function(locationId, viewId){
    var location = locationId[0].toString().replace(/[' ]/g, '').toLowerCase();
     var view = viewId[0].toString().replace(/[' ]/g, '').toLowerCase();
    console.log(view); 
    if(view === "customerview"){
      $location.path("/customer/" + location);
    }
    else{
      $location.path("/employee/" + location);
    }
  }

})

})();
