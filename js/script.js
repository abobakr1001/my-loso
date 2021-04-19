




$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth:292.5,
        auto:true,
        minSlides:1,
        maxSlides:3,
        slideMargin:50
    });
  });


  $(document).ready(function(){
      $('.counter-num').counterUp({
          delay:10,
          time:2000
      });
  });


  $(document).ready(function(){
    new WOW().init();
  })