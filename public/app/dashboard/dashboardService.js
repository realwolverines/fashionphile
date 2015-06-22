var app = angular.module('fashionphile');

app.service('dashboardService', function($http, $q){

  this.getStats = function(){
    var dfd = $q.defer(); 
      $http({
        method: 'GET', 
        url: '/api/stats'
      }).then(function(stats){
        console.log(stats.data); 
        dfd.resolve(stats.data); 
      })
    return dfd.promise; 
  }

  this.getLocations = function(){
    var deferred = $q.defer()
      $http({
        method: 'GET',
        url: '/api/location'
    }).then(function(res) {
      deferred.resolve(res.data);
    }).catch(function(res) {
      deferred.reject(res.data);
    });
    return deferred.promise;
  };

  this.getLocation = function(locationId){    
    var deferred = $q.defer()
      $http({
        method: 'GET',
        url: '/api/store/' + locationId
    }).then(function(res) {
      console.log('ss', res)
      deferred.resolve(res.data);
    }).catch(function(res) {
      deferred.reject(res.data);
    });
    return deferred.promise;
  };

  this.getLocationByParam = function(nameParam){
    var deferred = $q.defer()
      $http({
        method: 'GET',
        url: '/api/name/' + nameParam
    }).then(function(res) {
      console.log('ss', res)
      deferred.resolve(res.data);
    }).catch(function(res) {
      deferred.reject(res.data);
    });
    return deferred.promise;
  };

});