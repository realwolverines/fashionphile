
var app = angular.module('fashionphile');

app.controller('WallDisplayCtrl', function($scope){
   

  $scope.myInterval = 5000;
  var slides = $scope.slides = [
	{image: 'assets/img/helloLovely.jpg'},
	{image: 'assets/img/springClean.jpg'},
	{image: 'assets/img/springFling.jpg'}
  ];

  }); 


