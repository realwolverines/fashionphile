var Customer = require('../models/Customer.js'); 
var statsService = require('../services/statsService.js'); 

module.exports.getStats = function(req, res){

    statsService.getStats().then(function(stats){
        //create array for all stat objects to go into 
        var newStats = []; 
        var length = stats.length-1; 

        /* GET AVERAGES ******************************/ 
        var sum = 0;
        stats.map(function(i){
          console.log(sum);
          sum += (i.helpedAt - i.joined);
        })
        var average = sum / length; 
        console.log("total average is ", average);

        //add average to array 
        newStats.push({"average": average})
        console.log(newStats);


        /* GET NUMBER OF DAILY CUSTOMERS ************/



        /* GET AVERAGE NUMBER OF DAILY CUSTOMERS ************/



        /* GET SHORTEST WAIT TIME *****************************/



        /*  GET LIFETIME CUSTOMERS *****************************/




    });
}