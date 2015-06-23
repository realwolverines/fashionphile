(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('WallDisplayCtrl', function($scope, $state, $interval, CustomerService, customers){

	//populate queue with location-specific list
  var location = $state.params.location;
  console.log('walldisplayloc', $state.params.location)
  $scope.customers = customers;
  $scope.currentTime = Date.now();

  //determine wall carousel

  if(customers.length > 0) {
  	$scope.emptyqueue = false;
  } else {
  	$scope.emptyqueue = true;
  }

  //$interval hack

   $interval(function(location){
   		var locationParam = $state.params.location;
   		CustomerService.getCustomers(locationParam)
        .then(function(customers){
        	//this needs to run only once
        	if(customers.length > 0) {
				  		$scope.emptyqueue = false;
				  	} else {
				  		$scope.emptyqueue = true;
				  }
          $scope.customers = customers;
        }); 
   }, 5000);







  //watch customers helped broadcast

	// $scope.$on('customersHelped', function(event, customers){
	// 	console.log(customers)
	// 	$scope.customers = customers;
	// 	if(customers.length > 0) {
 //  		$scope.emptyqueue = false;
 //  	} else {
 //  		$scope.emptyqueue = true;
 //  }
	// });

	// $scope.$watch('customers', function() {
	// 	  $scope.customers = customers;
	//      console.log('hey, customers has changed!');
	//  });


  //wall carousel interval
		$scope.myInterval = 8000;
		var slides = $scope.slides = [
			{image: 'assets/img/helloLovely.jpg'},
			{image: 'assets/img/springClean.jpg'},
			{image: 'assets/img/springFling.jpg'}
		 ];
		 		 

	//tree data and arranging

    $scope.showIndex = true;
    console.log("Show Index",$scope.showIndex)
      

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.moveLastToTheBegginig = function () {
      var a = $scope.data.pop();
      $scope.data.splice(0,0, a);
    };

    $scope.newSubItem = function(scope) {
      // console.log('scope', scope);
      // console.log('this', this);
      // console.log('mv', scope.$modelValue);
      var nodeData = scope.$modelValue;
      var index = ""; 
           var newIndex = function(){
               if(!nodeData.children) {
                 index = 0;
                 console.log("if",index)
                 return index;
               }
               else{
                 index = nodeData.children.length;
                 console.log("newSubItem else", index)
               }
           };
      newIndex();
      nodeData.children.push({
        id: scope.$modelValue.id + "." + parseInt(scope.$modelValue.children.length),
        title: "Enter Title",
        parentId: scope.$modelValue.id,
        description: "Enter Description",
        children: [],
        index: index,
        folder: true
      });
    };

   $scope.newSubBookmark = function(scope) {
     var nodeData = scope.$modelValue;
     nodeData.children.push({
       dateAdded: new Date(),
       id: scope.$modelValue.id + "." + parseInt(scope.$modelValue.children.length),
       parentId: scope.$modelValue.id,
       title: "Enter Bookmark Title",
       description: "Enter Description",
       url: "Enter URL",
       index: index
     });

     var index = ""; 
          var newIndex = function(){
              if(!nodeData.children) {
                index = 0;
                console.log("if",index)
                return index;
              }
              else{
                index = nodeData.children.length;
                console.log("newSubBookmark else", index)
              }
          };
     newIndex();
   };
    $scope.social = true;
    // $scope.expanded = true;
    // $scope.toggleAllButtons = function(){
    //     $scope.expanded = !$scope.expanded;
    // }

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    $scope.collapseAll = function() {
      var scope = getRootNodesScope();
      scope.collapseAll();
    };

    $scope.expandAll = function() {
      var scope = getRootNodesScope();
      scope.expandAll();
    };
          $scope.folder = false;
          $scope.test = function() {
            if($scope.$modelValue.folder) {
            $scope.folder = true;
          };
        }

     $scope.newImage = function(input) {
      console.log($scope.data)
       $scope.data[0].children.push({
        image: input
       });
       $scope.imageUrl = "";
     };

  $scope.data = [          
        {    
          "children":[
                    {
                  "children":[],    
                  "dateAdded":1427840916950,
                  "dateGroupModified":1433275274589,
                  "id":"27",
                  "index":1,
                  "parentId":"1",
                  "title":"DevMountain",
                  "image": 'https://www.fashionphile.com/includes/images/thumb/BW74793/CW74793-LANVIN-Elaphe-Snakeskin-Large-Happy-Shoulder-Bag-Bleu-Nuit--0.jpg'
               },  
             {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":2,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW85134/BW85134-CHANEL-Lambskin-Quilted-Boy-Wallet-On-Chain-WOC-Navy-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":3,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW87074/BW87074-GIVENCHY-Sugar-Goatskin-Medium-Antigona-Midnight-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":4,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BB84316/BD54384-01.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":5,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW86919/BW86919-FENDI-Vitello-Elite-Medium-2Jours-Tote-Turquoise-NEW-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":6,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW85134/BW85134-CHANEL-Lambskin-Quilted-Boy-Wallet-On-Chain-WOC-Navy-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":7,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW87074/BW87074-GIVENCHY-Sugar-Goatskin-Medium-Antigona-Midnight-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":8,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BB84316/BD54384-01.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":9,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW86919/BW86919-FENDI-Vitello-Elite-Medium-2Jours-Tote-Turquoise-NEW-00.jpg',
                "children": []
             },
                {
                "dateAdded":1411165752765,
                "id":"14",
                "index":10,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW86919/BW86919-FENDI-Vitello-Elite-Medium-2Jours-Tote-Turquoise-NEW-00.jpg',
                "children": []
              }
             ],
      "dateAdded":1433434097840,
      "id":"0",
      "title":"Carousel Images",
      "folder": true,
    }
  ];
});

})();




