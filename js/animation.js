$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

$(window).scroll(function () {
	$('#bigBox').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
			if(window.animationRan==false){
				window.animationRan = true;
				//forward animation stuff here

				$("#lidRight").animateRotate(120, {
				  duration: 1500,
				  easing: 'linear'
				});

				$("#lidLeft").animateRotate(-120, {
				  duration: 1500,
				  easing: 'linear',
				  complete: function () {
				  	$("#glow").animate({
						top: (-1 * ($("#glow").height() / 2 + $("#smallBox").height() / 2)) + "px"
					}, 1500 );
					$("#smallBox").animate({
						top: (-1 * ($("#smallBox").height())) + "px"
					}, 1500 );
				  }
				});
			}
        }
		else {
            if(window.animationRan==true){
				//reverse animation stuff here
				$("#glow").animate({
					top: "0px"
			  	}, 0 );
				$("#smallBox").animate({
					top: "0px"
				}, 0 );
				$("#lidRight").animateRotate(0, {
				  duration: 0,
				  easing: 'linear'
				});
				$("#lidLeft").animateRotate(0, {
				  duration: 0,
				  easing: 'linear'
				});
			}
			window.animationRan=false;
        }
    });
});
