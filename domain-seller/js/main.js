 $(document).ready(function() {

 	// Carousel
 	$('.owl-carousel').owlCarousel({
 		items: 1,
 		loop: true,
 		nav: true
 	}); 
     
     // Popup

     $('.jsOpenPopup').click(function() {
           $('.jsPopup').bPopup({
     	     speed: 650,
            transition: 'slideDown',
	    transitionClose: 'slideBack'
     });
     });

     // WOW

     new WOW().init();
    

   });


    


    