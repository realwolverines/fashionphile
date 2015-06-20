var app = angular.module('fashionphile');

app.service('adminService', function($http, $q){

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

});