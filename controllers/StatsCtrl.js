
var Customer = require('../models/Customer.js'); 
var statsService = require('../services/statsService.js');
var _und = require('../node_modules/underscore/underscore.js');
var moment = require('../node_modules/moment/moment.js')

//declare moment
moment().format(); 

//CREATE STATS 
function createStats(stats) {

    console.log("STATS IS", stats);
        //create array for all stat objects to go into 
    var length = stats.length-1;
    var WaitTimes = [];
    var helpedAt = []; 
    var allCustomersByDate = [];
    var newStats = [];

    /* GET AVERAGES **************************************/ 
    var sum = 0;
    stats.map(function(i){
      WaitTimes.push(i.helpedAt - i.joined);
      helpedAt.push(i.helpedAt - i.joined);
      allCustomersByDate.push(JSON.stringify(i.helpedAt));
      sum += (+(i.helpedAt) - +(i.joined));
    })
    var average = sum/length;
    console.log(average);
    var averageMins = average/1000/60; 

    // sort wait times to find shortest and longest times 
    // WaitTimes.sort(a, b);

    WaitTimes.sort(function(a, b){return a-b});

    /* GET NUMBER OF TOTAL CUSTOMERS ******************************/
    var arrLength = WaitTimes.length;

    console.log("WAIT TIMES", WaitTimes); 

    /* GET WAIT TIMES SHORTEST AND LONGEST  ***********************/
    var shortestWait = WaitTimes[0];
    var longestWait = WaitTimes[arrLength - 1];
    var total = WaitTimes.length;

    /* GET AVERAGE NUMBER OF DAILY CUSTOMERS ********************/
    var map = {};
    var sequence = [];
    var averageDailyUsers = allCustomersByDate.map(function(i) {
        return i.substring(0, 11).trim();
    })

    for (var i = 0; i < averageDailyUsers.length; i++) {
        var item = averageDailyUsers[i];
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
            sequence.push(item);
        }
    }

        var output = [];
        for (i = 0; i < sequence.length; i++) {
            output.push(map[sequence[i]]);
        }
        var sumAverageDaily = 0;
        var lengthAverageDaily = output.length;

        output.map(function(i) {
            sumAverageDaily += Number(i);
        });
        var avgDaily = sumAverageDaily / lengthAverageDaily;

    /* GET AVERAGE CUSTOMERS BY DAY OF WEEK *********************/
    var dayOfWeek = {
        M:0,
        T:0,
        W:0,
        Th:0,
        F:0,
        S:0,
        Su:0,
    }; 

    var today = moment().format(); 

    /*  CREATE STATS OBJECT *************************************/
    newStats.push({
        "average": average,
        "shortestWait":shortestWait, 
        "longestWait":longestWait, 
        "totalCustomers":arrLength,
        "averageDailyCust":avgDaily
    });
    return newStats;

} //end of function createStats

module.exports = {

    getStats: function(req, res){
        statsService.getCustomers().then(function(stats){
            var Statistics = createStats(stats);
            res.status(200).send(Statistics);
        });
    },

    getStatsByLocation: function(req, res){
        var locationId = req.params.id; 
        statsService.getCustomersByLocation(locationId).then(function(stats){
            var locationStats = createStats(stats); 
            res.status(200).send(locationStats); 
    })
    }
} //end of module.exports 


