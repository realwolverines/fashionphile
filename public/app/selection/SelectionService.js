var app = angular.module('fashionphile');

app.service('SelectionService', function($q, $http){

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
  }

}); 
