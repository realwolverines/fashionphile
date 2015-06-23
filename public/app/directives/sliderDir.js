app = angular.module('sliderDir', []);

app.directive('sliderDirective', function(){
	return {
		restrict: "A",
		templateUrl: "/app/directives/sliderTemplate.html",
		scope: {
			data: "="
		},
		link: function(scope, elem, attr){
			scope.toggs = $('#CheckBox')[0].value;
			console.log("data", scope.data);
			scope.active = false;
			scope.open = function(){
				!scope.active;
			}

			// scope.toggle = function(url){
			// 	console.log("Togggggle")
			// 	data.image = url;
			// }
			$('.BSswitch').bootstrapSwitch('state', true);	

				var $c = $('#carousel'),
				$w = $(window);
				console.log("$c", scope);

		    $c.carouFredSel({
		    	direction: "left",
		    	// items: itemCount,
		    	scroll: {
		    		items: 1,
		    		easing: 'linear',
		    		duration: 8000,
		    		timeoutDuration: 0,
		    		pauseOnHover: "immediate"
		    	}
		    });
		    	$w.bind('resize.example', function() {
		var nw = $w.width();
		if (nw < 990) {
			nw = 990;
		}
 
		$c.width(nw * 3);
		$c.parent().width(nw);
 
	}).trigger('resize.example');
		}
	}
})
