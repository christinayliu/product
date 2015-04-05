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

$(window).load(function() {
    // DOM modifying stuff goes here:
	$("#imageHolder").css('margin-top',($("#glow").height() / 2 + $("#smallBox").height() / 2))
	$("#imageHolder").height($("#bigBox").height()).css({});
	window.animationRan = false;
});

$(window).scroll(function () {
	$("#bigBox").each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop() + $("#bigBox").height()/2;
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
			}
        }
    });
});
