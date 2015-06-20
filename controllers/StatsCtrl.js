var Customer = require('../models/Customer.js'); 
var statsService = require('../services/statsService.js');
var _und = require('../node_modules/underscore/underscore.js');
var moment = require('../node_modules/moment/moment.js')

//declare moment
moment().format(); 

module.exports = {

    getStats: function(req, res){

     statsService.getCustomers().then(function(stats){
        console.log("stats ", stats); 
        //create array for all stat objects to go into 
        var newStats = [];
        var length = stats.length-1;
        var WaitTimes = [];
        var helpedAt = []; 

        /* GET AVERAGES **************************************/ 
        var sum = 0;
        stats.map(function(i){
          WaitTimes.push(i.helpedAt - i.joined);
          helpedAt.push(i.helpedAt - i.joined);
          sum += (+i.helpedAt - +i.joined);
        })
        var average = sum / length;
        //add average to newStats array 

        WaitTimes.sort();

        // /* GET NUMBER OF TOTAL CUSTOMERS *********************/
        var arrLength = WaitTimes.length-1; 

        /* GET WAIT TIMES SHORTEST AND LONGEST  ********************/
        var shortestWait = WaitTimes[0];
        var longestWait = WaitTimes[arrLength];

        /* GET NUMBER OF DAILY CUSTOMERS **************************/
        console.log(helpedAt);

        /* GET AVERAGE NUMBER OF DAILY CUSTOMERS *****************/

        /* GET LIFETIME CUSTOMERS ********************************/


        /*  CREATE STATS OBJECT **********************************/
        newStats.push({
            "average": average,
            "shortestWait":shortestWait, 
            "longestWait":longestWait, 
            "totalCustomers":arrLength
        });

        console.log("stats object ", newStats); 
        //send back new stats
        res.status(200).send(newStats);

        });

    },

    getLast7Days: function(req, res){

    statsService.getLast7Days().then(function(err, customers){
        console.log("last 7 days of customers ", customers); 
    })
  }
}
