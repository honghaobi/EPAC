(function(){

  var s = skrollr.init();

  //loading cube

  $(window).load(function() {
    setTimeout(function(){
      $(".loader").fadeOut("slow");
    },2000);
  });

  //window size option
  if ($(window).width() < 1280) {
    $('.warning').css({'opacity': '1'});
  }

  $(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1280) {
      $('.warning').addClass('animated fadeInDown');
      $('.warning').removeClass('fadeOutUp');
    } else if (viewportWidth > 1280){
      $('.warning').removeClass('fadeInDown');
      $('.warning').addClass('fadeOutUp');
    }
  });


  //creating threesixty ol elements
  for (var i = 1; i <= 62; i++) {
    $('.threesixty_images').append('<img class="site-render-' + i +'" src="img/site-renders/' + i + '.jpg" alt="' + i + '" />');
  }

  //on hover drag cursor

  $('.threesixty_images').on('mouseover',function(event) {
    $('body').css( 'cursor', 'url(img/rotate.png), auto' );
  }).on('mouseout',function(event) {
    $('body').css( 'cursor', 'default' );
  }).on('mousedown',function(event) {
    $('body').css( 'cursor', 'url(img/rotate.png), auto' );
  });

  //nav animation & function
  $('nav').on('mouseenter', 'div', function(event) {
    $(this).addClass('scale150');
    $(this).removeClass('scale100');
  });

  $('nav').on('mouseout', 'div', function(event) {
    $(this).removeClass('scale150');
    $(this).addClass('scale100');
  });

  $('.logo').on('click', function(event) {
    $('html,body').animate({
      scrollTop: $('body').offset().top
    },'slow');
  });

  $('.p1').on('click', function(event) {
    $('html,body').animate({
      scrollTop: '949px'
    },'slow');
  });

  $('.p2').on('click', function(event) {
    $('html,body').animate({
      scrollTop: '2600px'
    },'slow');
  });

  $('.p3').on('click', function(event) {
    $('html,body').animate({
      scrollTop: '4634px'
    },'slow');
  });

  $('.p4').on('click', function(event) {
    $('html,body').animate({
      scrollTop: '6670px'
    },'slow');
  });

  $('.p5').on('click', function(event) {
    $('html,body').animate({
      scrollTop: '7481px'
    },'slow');
  });

  //light-study label animation:
  $('.dec').on('mouseenter', function(event) {
    $('.ls-label-dec').addClass('ls-label-selected');
  });

  $('.dec').on('mouseout', function(event) {
    $('.ls-label-dec').removeClass('ls-label-selected');
  });

  $('.sept').on('mouseenter', function(event) {
    $('.ls-label-sept').addClass('ls-label-selected');
  });

  $('.sept').on('mouseout', function(event) {
    $('.ls-label-sept').removeClass('ls-label-selected');
  });

  $('.jun').on('mouseenter', function(event) {
    $('.ls-label-jun').addClass('ls-label-selected');
  });

  $('.jun').on('mouseout', function(event) {
    $('.ls-label-jun').removeClass('ls-label-selected');
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
          totalFrames: 62, // Total no. of image you have for 360 slider
          endFrame: 62, // end frame for the auto spin animation
          currentFrame: 1, // This the start frame for auto spin
          imgList: '.threesixty_images', // selector for image list
          progress: '.spinner', // selector to show the loading progress
          imagePath:'img/site-renders/', // path of the image assets
          ext: '.jpg', // extention for the assets
          height: 310,
          width: 650,
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

  $('.button-one').on('click', function(event) {
    $('.render-pop-one').show();
    $('.render-pop-img-one').addClass('animated zoomIn').show();
    $('.render-pop-img-one').removeClass('zoomOut');
  });

  $('.render-pop-one').on('click', function(event) {
    $('.render-pop-img-one').addClass('animated zoomOut');
    $('.render-pop-img-one').removeClass('zoomIn');
    window.setTimeout(function(){
      $('.render-pop-one').hide();
    },500);
  });

  $('.button-two').on('click', function(event) {
    $('.render-pop-two').show();
    $('.render-pop-img-two').addClass('animated zoomIn').show();
    $('.render-pop-img-two').removeClass('zoomOut');
  });

  $('.render-pop-two').on('click', function(event) {
    $('.render-pop-img-two').addClass('animated zoomOut');
    $('.render-pop-img-two').removeClass('zoomIn');
    window.setTimeout(function(){
      $('.render-pop-two').hide();
    },500);
  });

  $('.button-three').on('click', function(event) {
    $('.render-pop-three').show();
    $('.render-pop-img-three').addClass('animated zoomIn').show();
    $('.render-pop-img-three').removeClass('zoomOut');
  });

  $('.render-pop-three').on('click', function(event) {
    $('.render-pop-img-three').addClass('animated zoomOut');
    $('.render-pop-img-three').removeClass('zoomIn');
    window.setTimeout(function(){
      $('.render-pop-three').hide();
    },500);
  });

  $('.button-four').on('click', function(event) {
    $('.render-pop-four').show();
    $('.render-pop-img-four').addClass('animated zoomIn').show();
    $('.render-pop-img-four').removeClass('zoomOut');
  });

  $('.render-pop-four').on('click', function(event) {
    $('.render-pop-img-four').addClass('animated zoomOut');
    $('.render-pop-img-four').removeClass('zoomIn');
    window.setTimeout(function(){
      $('.render-pop-four').hide();
    },500);
  });

  $('.drawing-button').on('click', function(event) {
    if ($(event.target).hasClass('plan1-b') || $(event.target).hasClass('plan2-b') || $(event.target).hasClass('top-b') || $(event.target).hasClass('site-building-b') || $(event.target).hasClass('trees-b')){

      $('.buttons-container').animate({
        top: '80px'
      },'slow');

      setTimeout(function(){
        $('html,body').animate({
          scrollTop: $('.buttons-container').offset().top
        },'slow');
      },600);

    } else if ($(event.target).hasClass('section-b') || $(event.target).hasClass('elevation-b')) {
      $('.buttons-container').animate({
        top: '760px'
        },'slow');

      setTimeout(function(){
        $('html,body').animate({
          scrollTop: '7800px'
        },'slow');
      },600);
    }
  });
})();
