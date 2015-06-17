(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($scope, locations, $window, SelectionService, $location){

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

	$scope.addNew = function(location){
		SelectionService.addLocation(location)
		.then(function(){
			SelectionService.getLocations()
			.then(function(locations){
				$scope.locations = locations;
				$scope.location = {};	
			});
		});

	};

	$scope.deleteStore = function(location){
		SelectionService.deleteLocation(location)
		.then(function(){
			SelectionService.getLocations()
			.then(function(locations){
				$scope.locations = locations;	
			});
		});
	};

$scope.startLocationEditing = function(location){
     location.editing = true;
 };
     
 $scope.doneLocationEditing = function(location){
     console.log('locIDCtrller', location)
     SelectionService.saveLocation(location).then(function(){
           SelectionService.getLocations()
           .then(function(locations){
             $scope.locationss = locations;
           })
         })
     location.editing = false;
     $scope.editedlocation = null;
 };

	$scope.locations = locations;
	console.log($window.location);

	var currentStore = $window.location.hash.substr(2, $window.location.hash.length)

})

})();
