$(document).bind("contextmenu",function(e){
  return false;
    });


$('.more').on('click', function(){
  $('#clicktext').css("display", "none");
  $('.fa-music').fadeIn(100);
})

  $(document).ready(function() {
    $(".img-fluid").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
    });
  })

  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1200,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 2000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  $('.teamowl').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3200,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            loop:true,
        },
        768:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
   });
   $('.social').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true,
    autoHeight:true,
    margin:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        768:{
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:false,
            loop:false,
        }
    }
});

  $('.youtube').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true,
    autoHeight:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false,
        }
    }
});

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  }); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
