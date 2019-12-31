$(function(){
    var navbar = $('.navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 200){
            navbar.removeClass('navbar-scroll');
		} else {
            navbar.addClass('navbar-scroll');
		}
	});
});

//Pour jquery:
//remplacer querySelector par $
//ajouter doc rdy



