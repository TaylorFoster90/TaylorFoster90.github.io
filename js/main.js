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
    if(scroll_pos > 320) {
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
})
