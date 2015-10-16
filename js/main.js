$(document).ready(function(){
  $(window).load(function() {
    $('#main-slider').flexslider();
    $('.alt-slider').flexslider({animation: "slide", slideshow: false});
  });
 $("#header").css('height', $(".navigation").outerHeight(true));

  //Navbar
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > $("#billboard").outerHeight(true)) {
      $(".navigation").css('background-color', 'rgba(46, 46, 46, .7)');
      $(".back-to-top").css('visibility', 'visible');
    } else {
      $(".navigation").css('background-color', 'rgb(46, 46, 46)');
      $(".back-to-top").css('visibility', 'hidden');
    }
  });
  $('.back-to-top, .mobile-back-to-top').click(function(){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'fast');
  })
  //SmoothScroll
  $(".site-nav a, .about-text a").smoothScroll({offset: -150});

  //Billboard Circle Animations
  setTimeout(function(){$(".circle-1 p").addClass("visible"); }, 1000);
  $('.circle-1 p i').each(function(i, el) {
   setTimeout(function() {
      $(el).addClass('pop-once');
   }, 1700 + i * 300);
 })
  setTimeout(function(){$(".circle-1").addClass("circle-1-active")}, 2900);
})
