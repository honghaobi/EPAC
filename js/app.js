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
      product1 = $('.product1').ThreeSixty({
          totalFrames: 10, // Total no. of image you have for 360 slider
          endFrame: 10, // end frame for the auto spin animation
          currentFrame: 1, // This the start frame for auto spin
          imgList: '.threesixty_images', // selector for image list
          progress: '.spinner', // selector to show the loading progress
          imagePath:'img/site', // path of the image assets
          ext: '.png', // extention for the assets
          height: 900,
          width: 800,
          navigation: true,
          disableSpin: true // Default false
      });
  }

  init();

  //toggle drawings
  $('.plan2').fadeOut('slow');
  $('.top-view').fadeOut('slow');

  $('.plan2-b').on('click', function(event) {
    if ($('.plan2:visible').length === 0) {
      $('.plan2-b').toggleClass('selected-button');
      $('.plan1-b').removeClass('selected-button');
      $('.top-b').removeClass('selected-button');
      $('.plan2').fadeIn('slow');
      $('.plan1').fadeOut('slow');
      $('.top-view').fadeOut('slow');
    }
  });

  $('.plan1-b').on('click', function(event) {
    if ($('.plan1:visible').length === 0) {
      $('.plan1-b').toggleClass('selected-button');
      $('.plan2-b').removeClass('selected-button');
      $('.top-b').removeClass('selected-button');
      $('.plan1').fadeIn('slow');
      $('.plan2').fadeOut('slow');
      $('.top-view').fadeOut('slow');
    }
  });

  $('.top-b').on('click', function(event) {
    if ($('.top-view:visible').length === 0) {
      $('.top-b').toggleClass('selected-button');
      $('.plan2-b').removeClass('selected-button');
      $('.plan1-b').removeClass('selected-button');
      $('.top-view').fadeIn('slow');
      $('.plan1').fadeOut('slow');
      $('.plan2').fadeOut('slow');
    }
  });

  $('.site-building-b').on('click', function(event) {
    $('.site-building-b').toggleClass('selected-button');
    if ($('.site-building:visible').length === 0) {
      $('.site-building').fadeIn('slow');
    } else {
      $('.site-building').fadeOut('slow');
    }
  });

  $('.trees-b').on('click', function(event) {
    $('.trees-b').toggleClass('selected-button');
    if ($('.trees:visible').length === 0) {
      $('.trees').fadeIn('slow');
    } else {
      $('.trees').fadeOut('slow');
    }
  });

  $('.section-b').on('click', function(event) {
    $('.elevation-b').toggleClass('selected-button');
    $('.section-b').toggleClass('selected-button');
    if ($('.elevation:visible').length === 0) {
      $('.elevation').fadeIn('slow');
    } else {
      $('.elevation').fadeOut('slow');
    }
  });

  $('.elevation-b').on('click', function(event) {
    $('.elevation-b').toggleClass('selected-button');
    $('.section-b').toggleClass('selected-button');
    if ($('.elevation:visible').length === 0) {
      $('.elevation').fadeIn('slow');
    } else {
      $('.elevation').fadeOut('slow');
    }
  });

})();
