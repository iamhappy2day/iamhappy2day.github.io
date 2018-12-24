//Preloader
document.body.onload = function() {
	setTimeout(function(){
		const preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done'))
		 {
			preloader.classList.add('done');
		}	
	}, 1000);
		};

// click events for dynamic buttons in portfolio section
$(document).on('click','#onClickMovers',  () => {
		window.open('https://uslugi-gruzchikov.by', '_blank');
	});

$(document).on('click','#onClickCV',  () => {
		window.open('https://iamhappy2day.github.io/myCV/', '_blank');
	});

$(document).on('click','#onClickMobile',  () => {
		window.open('https://iamhappy2day.github.io/mobile/', '_blank');
	});

$(document).on('click','#onClickDomain',  () => {
		window.open('https://iamhappy2day.github.io/domain-seller/', '_blank');
	});

// document.ready
$(document).ready(function() {


$("#videoBg").get(0).play();

//NAV - burger

$('.menu-btn').click(function(event){
event.preventDefault();
$(this).toggleClass('menu-btn_active');
$('.menu-block').toggleClass('menu-block-active');
});

// func to hide menu when clck
$('.nav-link').click(function(){
  $('.menu-block-active').toggleClass('menu-block-active');
  $('.menu-btn_active').toggleClass('menu-btn_active');

});

//transition for nav-links

  $("#menu, #mobile-menu, #footer-menu, .wr-deep-info").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


//WOW
new WOW().init();

//Owl-carousel
$('.owl-carousel').owlCarousel({
	
	loop: true,
	nav: true,
	responsive:{ 
			0:{
				items:1 
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		},
	 navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>']
});


	//Popup

	$('#btnForPopup, #popupBtn').on('click',() => {
		$('.jsPopup').bPopup({
			speed: 650,
            transition: 'slideIn',
    		transitionClose: 'slideBack'
		});
	});

	//BTN click

	$('#onClick').on('click', () => {
		window.open('https://drive.google.com/drive/folders/1EOdZCcE9rAe0vMlKqtLRNweJGuVxjzKM', '_blank');
	});

	
});
