$(document).ready(function(){
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
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
  //Picture Loop For Portoflio
  var imgIndex = 1;
  $(".haulzi-scroll").click(function(e){
    e.preventDefault();
    imgIndex++;
    if(imgIndex > 3){
      imgIndex = 1;
    }
    $(".haulzi img").fadeOut(500,function(){
      $(".haulzi img").attr('src', './img/haulzi-' + imgIndex.toString() + '.png');
    });
    $(".haulzi img").fadeIn(500,function(){
      $('.haulzi img').attr('src', './img/haulzi-' + imgIndex.toString() + '.png');
    })
  });
  $(".voxtell-scroll").click(function(e){
    e.preventDefault();
    imgIndex++;
    if(imgIndex > 3){
      imgIndex = 1;
    }
    $(".voxtell img").fadeOut(500,function(){
      $(".voxtell img").attr('src', './img/voxtell-' + imgIndex.toString() + '.png');
    });
    $(".voxtell img").fadeIn(500,function(){
      $('.voxtell img').attr('src', './img/voxtell-' + imgIndex.toString() + '.png');
    });
  })
  $(".tot-scroll").click(function(e){
    e.preventDefault();
    imgIndex++;
    if(imgIndex > 3){
      imgIndex = 1;
    }
    $(".tot img").fadeOut(500,function(){
      $(".tot img").attr('src', './img/tasteoftennis-' + imgIndex.toString() + '.png');
    });
    $(".tot img").fadeIn(500,function(){
      $('.tot img').attr('src', './img/tasteoftennis-' + imgIndex.toString() + '.png');
    });
  });
  //Contact Form
  $(".input-text").blur(function(){
    if($(this).val().trim() == ''){
      $(this).css('border-color', 'rgb(255, 153, 51)');
      $(this).css('color', 'rgb(255, 153, 51)');
    }else{
      $(this).css('border-color', 'rgb(0, 174, 255)');
      $(this).css('color', 'rgb(0, 174, 255)');
    }
  });
  //SmoothScroll
  $(".site-nav a, .about-text a").smoothScroll({offset: -150});
})
