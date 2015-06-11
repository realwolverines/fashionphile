(function(){
  'use strict';

var app = angular.module('fashionphile');

app.controller('LoginService', function(){

  this.login = function(user){
    var dfd = $q.defer()
      $http({
        method: 'POST',
        url: '/api/users/auth',
        data: user
      })
      .then(function(res){
        dfd.resolve(res);
      }); 
    return dfd.resolve; 
  }

  this.signup = function(user) {
    var dfd = $q.defer()
      $http({
        method: 'POST',
        url: '/api/users',
        data: user
      })
      .then(function(res){
        dfd.resolve(res);
      });
    return dfd.resolve;
  }

});

})();//end