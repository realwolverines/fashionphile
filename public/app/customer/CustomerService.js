
  this.addCustomer = function(customer, location){
    var dfd = $q.defer(); 
        $http({
          method: 'POST',
          url: 'http://localhost:8080/api/'+location+'/queue',
          data: {
            "name": customer.name, 
            "status": "pending",
            "joined": Date.now,
            "location": location
          }
        })
        .then(function(res){
          dfd.resolve(res);
        }); 
      return dfd.promise;
    }

  }) /* End of Service logic */
  
});
