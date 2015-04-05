$(window).scroll(function () {
    //modify accordingly
	$('.animation-test').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            window.animationRan = true;
			$("#glow").animate({
				width: ($("#glow").width() * 1.5),
				top: "+-100px"
			  }, 1500 );
        } else {
            if(window.animationRan==true){
				window.animationRan==false;
				//reverse animation stuff here
			}
        }
    });
});

$("#.lidLeft").animateRotate(90, {
  duration: 700,
  easing: 'linear',
  complete: function () {}
});
