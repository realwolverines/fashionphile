var Customer = require('../models/Customer.js'); 
var statsService = require('../services/statsService.js'); 

module.exports.getStats = function(req, res){

    statsService.getStats().then(function(stats){
        //create array for all stat objects to go into 
        var newStats = []; 
        var length = stats.length-1;
        var WaitTimesArr = []; 

        /* GET AVERAGES **************************************/ 
        var sum = 0;
        stats.map(function(i){
          console.log(sum);
          sum += (i.helpedAt - i.joined);
          WaitTimesArr.push(i.helpedAt - i.joined);
          console.log("pushed to wait times ", (i.helpedAt - i.joined)); 
        })
        var average = sum / length; 
        console.log("total average is ", average);

        //add average to newStats array 
        newStats.push({"average": average})
        console.log(newStats);

        /* LONGEST WAIT TIME  *********************/
        var longestWait = Math.max([WaitTimesArr]); 
        newStats.push({"longestWait": longestWait}); 

        /* GET SHORTEST WAIT TIME *****************************/
        var shortestWait = Math.min([WaitTimesArr]); 
        newStats.push({"shortestWait": shortestWait})


        /* GET NUMBER OF DAILY CUSTOMERS *********************/


        /* GET NUMBER OF DAILY CUSTOMERS *********************/


        /* GET AVERAGE NUMBER OF DAILY CUSTOMERS ************/


        /*  GET LIFETIME CUSTOMERS *****************************/


        console.log("stats object ", newStats); 


    });
}