// $(function() {
 
// 	var $c = $('#carousel'),
// 		$w = $(window),
// 		$direction = $('#direction')
// 		$speed = parseInt($('#speed').val());

// 	// 	$('select').change(function(){
// 	// 		console.log("CHANGED! to " + $('#speed').val())
// 	// 		$speed = parseInt($('#speed').val());
// 	// 		console.log("Speed", $speed)
// 	// 	})
// 	// console.log($direction, $speed)
//  	console.log("From slider.js", $c)
// 	$c.carouFredSel({
// 		align: false,
// 		items: 1,
// 		direction: "left",
// 		scroll: {
// 			items: 1,
// 			duration: 5000,
// 			timeoutDuration: 0,
// 			easing: 'linear',
// 			pauseOnHover: 'immediate'
// 		}
// 	});
 
// 	$w.bind('resize.example', function() {
// 		var nw = $w.width();
// 		if (nw < 990) {
// 			nw = 990;
// 		}
 
// 		$c.width(nw * 3);
// 		$c.parent().width(nw);
 
// 	}).trigger('resize.example');
 
// });