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


})();
