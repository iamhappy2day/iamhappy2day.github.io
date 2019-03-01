
$(document).ready(function(){

//Owl-carousel

  //slider-left
  $(".deals").owlCarousel({
    responsiveClass:true,
    responsive: {
    // breakpoint from 0 up
    0:{
      items: 1,
      loop: true,
      nav: true,
      navText : ['','<i class="fas fa-exchange-alt"></i>'],
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:1000
      },
    600:{
      items: 2,
      loop: true,
      nav: true,
      navText : ['','<i class="fas fa-exchange-alt"></i>'],
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:1000
      },
    923:{
      items: 3,
      loop: true,
      nav: true,
      navText : ['','<i class="fas fa-exchange-alt"></i>'],
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:1000
      },
    1194 : {
      items: 1,
    	loop: true,
    	nav: true,
    	navText : ['','<i class="fas fa-exchange-alt"></i>'],
    	animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:1000
      }

    }
  });

  //slider right
  $(".big-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    items:1,
    smartSpeed:1000
  });

  //Owl-carousel companies
  $(".companies").owlCarousel({

  items: 6,
  loop: true,
  nav: true,
  navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
   responsive: {
    // breakpoint from 0 up
    0:{
      items: 1,
      loop: true,
      nav: true,
      navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
      },
    441:{
      items: 2,
      loop: true,
      nav: true,
      navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    },
    600:{
      items: 4,
      loop: true,
      nav: true,
      },
    960:{
      items: 6,
      loop: true,
      nav: true,
      }

    }
  });

  $(".fb-slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']

  });

//Tabs
$('.js-tab-trigger').click(function() {
   const id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});

//btn-like

$('.btn-like-js').click(function(){
  $(this).toggleClass('like-active');
});



//NAV - burger

$('.nav-burger').click(function(event){
$(this).toggleClass('menu-btn_active');
$('.menu-block').toggleClass('menu-block-active');
});
// func to hide menu when clck
$('.nav-link').click(function(){
  $('.menu-block-active').toggleClass('menu-block-active');
  $('.menu-btn_active').toggleClass('menu-btn_active');

});

});