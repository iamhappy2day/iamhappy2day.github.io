$(document).ready(function() {


//owl-carousel

	$('.owl-carousel').owlCarousel({
    loop:true,
    
    nav:true,
    items:1,
    navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>']
});

//WOW
 	new WOW().init();
	});