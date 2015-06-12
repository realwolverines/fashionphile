(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($routeParams, $timeout, $route, $window){

$timeout(function(){
console.log($window.location);
	
}, 3000)

var currentStore = $window.location.hash.substr(2, $window.location.hash.length)
var dfd = $q.defer(); 
$http({
	method: 'POST', 
	url: 
	data: {
		"name": customer.name, 
		"location": currentStore
	}
})
.then(function(res){
	dfd.resolve(res); 
}); 

console.log(customer.name, customer.location); 
return dfd.promise; 

});

})();
