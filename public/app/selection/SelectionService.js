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

  this.addLocation = function(location) {
    var name = location.name, nameParameter = name.toString().replace(/[' ]/g, '').toLowerCase();
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: '/api/location',
      data: {
        "name": name,
        "nameparam": nameParameter
      }
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };  

  this.saveLocation = function(location) {
    console.log('location', location)
    var locationId = location._id;
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/location/' + locationId,
      data: {
        "name": location.name
      }
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.deleteLocation = function(location) {
    console.log('locserve', location);
    console.log('loc id', location._id);
    var locationID = location._id;
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: '/api/location/' + locationID
    }).then(function(response) {
      console.log("Deleted Location " + location.name, response);
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

}); 
