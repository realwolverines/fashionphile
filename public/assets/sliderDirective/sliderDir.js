app = angular.module('sliderDir', []);

app.directive('sliderDirective', function(){
	return {
		restrict: "A",
		templateUrl: "/assets/sliderDirective/slidertemplate.html",
		scope: {
			data: "="
		},
		link: function(scope, elem, attr){
				var $c = $('#carousel'),
				$w = $(window);
				console.log("$c", scope);
				// var itemCount = scope.data.array
				// console.log("carousel", carousel);
		  
		    $c.carouFredSel({
		    	direction: "left",
		    	// items: itemCount,
		    	scroll: {
		    		items: 1,
		    		easing: 'linear',
		    		duration: 5000,
		    		timeoutDuration: 0,
		    		pauseOnHover: "immediate"
		    	}
		    });
		}
	}
})