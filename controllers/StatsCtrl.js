var Customer = require('../models/Customer.js'); 
var statsService = require('../services/statsService.js');
var _und = require('../node_modules/underscore/underscore.js'); 

module.exports.getStats = function(req, res){

    statsService.getStats().then(function(stats){
        //create array for all stat objects to go into 
        var newStats = [];
        var length = stats.length-1;
        var WaitTimes = [];

        /* GET AVERAGES **************************************/ 
        var sum = 0;
        stats.map(function(i){
          console.log(sum);
          WaitTimes.push(i.helpedAt - i.joined);
          sum += (+i.helpedAt - +i.joined);
        })
        var average = sum / length;
        //add average to newStats array 
        newStats.push({"average": average})

        /* GET WAIT TIMES SHORTEST AND LONGEST  ********************/
        WaitTimes.sort();
        var arrLength = WaitTimes.length; 
        var shortestWait = WaitTimes[0]; 
        var longestWait = WaitTimes[WaitTimes.length - 1];

        newStats.push({"shortestWait":shortestWait},
                      {"longestWait":longestWait}); 


        /* GET NUMBER OF DAILY CUSTOMERS *********************/


        /* GET NUMBER OF DAILY CUSTOMERS *********************/


        /* GET AVERAGE NUMBER OF DAILY CUSTOMERS ************/


        /*  GET LIFETIME CUSTOMERS *****************************/


        console.log("stats object ", newStats); 


    });
}