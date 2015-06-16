var app = angular.module('fashionphile'); 

app.service('SelectionService', function($q, $http) {
  this.getLocations = function(locationId){
    var dfd = $q.defer(); 
      $http({
        method: 'GET', 
        url: '/api/location/' + locationId, 
      }).then(function(res){
        console.log(res); 
        dfd.resolve(res); 
      })
    return dfd.promise; 
  }
})