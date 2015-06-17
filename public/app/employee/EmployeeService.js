var app = angular.module('fashionphile');

app.service('EmployeeService', function($q, $http, $state, $stateParams){
    
    this.getCustomers = function(){
      var dfd = $q.defer(); 
        $http({
          method: 'GET', 
          url: 'http://localhost:8080/api/employee/:location'
        })
        .then(function(customers){
          dfd.resolve(customers);
        })
      return dfd.promise; 
    }

    // this.addCarousel = function(url, location){
    //   var dfd = $q.defer();
    //     $http({
    //       method: 'POST', 
    //       url: '/api/carousel/',
    //       data: {
    //         url: url, 
    //         location: location
    //       }
    //     })
    // }

}); /* End of Service logic */