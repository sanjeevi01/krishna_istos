jQuery(document).ready(function($){

	//Main menu
	$('#main-menu').smartmenus();
	
	//Mobile menu toggle
	$('.navbar-toggle').click(function(){
		$('.region-primary-menu').slideToggle();
	});

	//Mobile dropdown menu
	if ( $(window).width() < 767) {
		$(".region-primary-menu li a:not(.has-submenu)").click(function () {
			$('.region-primary-menu').hide();
	    });
	}

	//flexslider
	jQuery('.flexslider').flexslider({
    	animation: "slide"	
    });

  //about tabs
  $('.collapse.show').prev('.card-header').addClass('active');
  $('#accordion, #bs-collapse, #accordion1')
      .on('show.bs.collapse', function (a) {
          $(a.target).prev('.card-header').addClass('active');
      })
      .on('hide.bs.collapse', function (a) {
          $(a.target).prev('.card-header').removeClass('active');
      });
    
    
});

// Variables
var player,
		card  = document.querySelector( '.card' ),
		play  = document.querySelector( '.card-play' ),
		video = document.querySelector( '.card-video' );


// // Shine effect
// card.onmousemove = function (e) {
// 	const x = e.pageX - card.offsetLeft;
// 	const y = e.pageY - card.offsetTop;

// 	card.style.setProperty( '--x', x + 'px' );
// 	card.style.setProperty( '--y', y + 'px' );
// }


// Youtube API
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}


// Player Ready
function onPlayerReady(event) {
	play.addEventListener( 'click', function() {
		card.classList.add( 'video-is-open' );
		setTimeout(function() {
			video.style.display = 'block';
			player.playVideo();
		}, 500);
	});
}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// window.onscroll = function() {myFunction()};

// var menu = document.getElementById("mymenu");
// var sticky = menu.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     menu.classList.add("sticky");
//   } else {
//     menu.classList.remove("sticky");
//   }
// }

// Drupal.debounce = function (func, wait, immediate) {

// 	'use strict';
  
// 	var timeout;
// 	var result;
// 	return function () {
// 	  var context = this;
// 	  var args = arguments;
// 	  var later = function () {
// 		timeout = null;
// 		if (!immediate) {
// 		  result = func.apply(context, args);
// 		}
// 	  };
// 	  var callNow = immediate && !timeout;
// 	  clearTimeout(timeout);
// 	  timeout = setTimeout(later, wait);
// 	  if (callNow) {
// 		result = func.apply(context, args);
// 	  }
// 	  return result;
// 	};
//   };

    // $('.customer-logos').slick({
    //     slidesToShow: 7,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     arrows: false,
    //     dots: false,
    //     pauseOnHover: false,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4
    //         }
    //     }, {
    //         breakpoint: 520,
    //         settings: {
    //             slidesToShow: 3
    //         }
    //     }]
    // });


  //  $(".owl-carousel").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2500,
  //     arrows: false,
  //     dots: false,
  //     itemsDesktop:[1000,3],
  //     itemsDesktopSmall:[979,2],
  //     itemsTablet:[768,2],
  //     itemsMobile:[650,1],
  //     pagination:true,
  //  });


// //news block
// var bg = document.querySelector('.item-bg');
// var items = document.querySelectorAll('.news__item');
// var item = document.querySelector('.news__item');

// function cLog(content) {
//     console.log(content)
// }

// if($(window).width() > 800) {
//     $(document).on("mouseover", ".news__item", function (_event, _element) {

//         var newsItem = document.querySelectorAll('.news__item');
//         newsItem.forEach(function (element, index) {
//             element.addEventListener('mouseover', function () {
//                 var x = this.getBoundingClientRect().left;
//                 var y = this.getBoundingClientRect().top;
//                 var width = this.getBoundingClientRect().width;
//                 var height = this.getBoundingClientRect().height;

//                 $('.item-bg').addClass('active');
//                 $('.news__item').removeClass('active');
//                 // $('.news__item').removeClass('active');


//                 bg.style.width = width + 'px';
//                 bg.style.height = height + 'px';
//                 bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//             });

//             element.addEventListener('mouseleave', function () {
//                 $('.item-bg').removeClass('active');
//                 $('.news__item').removeClass('active');
//             });

//         });

//     });
// }


// var swiper = new Swiper('.news-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     loop: true,
//     centeredSlides: true,
//     keyboard: true,
//     spaceBetween: 0,
//     slidesPerView: 'auto',
//     speed: 300,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 0,
//         modifier: 3,
//         slideShadows: false
//     },
//     breakpoints: {
//         480: {
//             spaceBetween: 0,
//             centeredSlides: true
//         }
//     },
//     simulateTouch: true,
//     navigation: {
//         nextEl: '.news-slider-next',
//         prevEl: '.news-slider-prev'
//     },
//     pagination: {
//         el: '.news-slider__pagination',
//         clickable: true
//     },
//     on: {
//         init: function () {
//             var activeItem = document.querySelector('.swiper-slide-active');

//             var sliderItem = activeItem.querySelector('.news__item');

//             $('.swiper-slide-active .news__item').addClass('active');

//             var x = sliderItem.getBoundingClientRect().left;
//             var y = sliderItem.getBoundingClientRect().top;
//             var width = sliderItem.getBoundingClientRect().width;
//             var height = sliderItem.getBoundingClientRect().height;


//             $('.item-bg').addClass('active');

//             bg.style.width = width + 'px';
//             bg.style.height = height + 'px';
//             bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//         }
//     }
// });

// swiper.on('touchEnd', function () {
//     $('.news__item').removeClass('active');
//     $('.swiper-slide-active .news__item').addClass('active');
// });

// swiper.on('slideChange', function () {
//     $('.news__item').removeClass('active');
// });

// swiper.on('slideChangeTransitionEnd', function () {
//     $('.news__item').removeClass('active');
//     var activeItem = document.querySelector('.swiper-slide-active');

//     var sliderItem = activeItem.querySelector('.news__item');

//     $('.swiper-slide-active .news__item').addClass('active');

//     var x = sliderItem.getBoundingClientRect().left;
//     var y = sliderItem.getBoundingClientRect().top;
//     var width = sliderItem.getBoundingClientRect().width;
//     var height = sliderItem.getBoundingClientRect().height;


//     $('.item-bg').addClass('active');

//     bg.style.width = width + 'px';
//     bg.style.height = height + 'px';
//     bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// });
   