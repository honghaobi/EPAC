(function(){
  var s = skrollr.init();

  //nav animation & function
  $('nav').on('mouseenter', 'div', function(event) {
    $(this).addClass('scale150');
    $(this).removeClass('scale100');
  });

  $('nav').on('mouseout', 'div', function(event) {
    $(this).removeClass('scale150');
    $(this).addClass('scale100');
  });

  $('.p1').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('.landingPage').offset().top
      },'slow');
  });

  $('.p2').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('.designPage').offset().top
      },'slow');
  });

  $('.p3').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('.structurePage').offset().top
      },'slow');
  });

  $('.p4').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('.renderPage').offset().top
      },'slow');
  });

  $('.p5').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('.lastPage').offset().top
      },'slow');
  });

  //location scroll event:

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 1600) {
      $('.location').addClass('locationActive');
    } else{
      $('.location').removeClass('locationActive');
    }
  });



  //site render:

  function init(){
      console.log("working");
      product1 = $('.product1').ThreeSixty({
          totalFrames: 10, // Total no. of image you have for 360 slider
          endFrame: 10, // end frame for the auto spin animation
          currentFrame: 1, // This the start frame for auto spin
          imgList: '.threesixty_images', // selector for image list
          progress: '.spinner', // selector to show the loading progress
          imagePath:'img/site', // path of the image assets
          ext: '.png', // extention for the assets
          height: 900,
          width: 1440,
          navigation: true,
          disableSpin: true // Default false
      });
  }

  init();

})();
