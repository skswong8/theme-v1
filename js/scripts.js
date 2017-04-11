$(function(){
	// full page hero
	$(window).resize(function() {
	    $('header').height($(window).height());
	});

	$(window).trigger('resize');

	// sliding nav
	var sideMenu = false;
    $(".nav-icon").click(function() {
      if (!sideMenu) {
        $(".triangle").animate({right: "0"}, 150, function(){
        	$(".social").animate({right: "90px"}, 150, function(){
            $(".navigation").animate({right: "55px"}, 150);
          });
        }); 
        sideMenu = true;
      }
      else {
      	$(".navigation").animate({right: "-110px"}, 150, function(){
        	$(".social").animate({right: "-165px"}, 150, function(){
            $(".triangle").animate({right: "-450px"}, 150);
          });
        });
        sideMenu = false;
      }
    });

});