$(document).on('ready', function slicky(){
  $('.regular').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
      responsive: [
        {
        breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
        breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
      ]
  });

  $('.regular2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// HABERLER slick fix
  if ($('div.news-slider > article').length % 2 != 0) {
    $('div.news-slider').append('<article></article>');
    $('div.news-slider > article').eq(-2).find('.kesit').remove();
  }

  $('.news-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
      responsive: [
      {
      breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
  });

});


$(document).on('ready', function() {

                $('#content').load('/temalar/sosero2/html/urunler.html', function(){
                 
                  $('.regular').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
      responsive: [
        {
        breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
        breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
      ]
  });

  $('.regular2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// HABERLER slick fix
  if ($('div.news-slider > article').length % 2 != 0) {
    $('div.news-slider').append('<article></article>');
    $('div.news-slider > article').eq(-2).find('.kesit').remove();
  }

  $('.news-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
      responsive: [
      {
      breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
  });


                 });

                $('nav.dallık ul li a').click(function() {

                  var page = $(this).attr('href');
                  $('#content').load('/temalar/sosero2/html/'+ page, function(){
                   window.benimFonk(); 

$('.regular').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
      responsive: [
        {
        breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
        breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
      ]
  });

  $('.regular2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// HABERLER slick fix
  if ($('div.news-slider > article').length % 2 != 0) {
    $('div.news-slider').append('<article></article>');
    $('div.news-slider > article').eq(-2).find('.kesit').remove();
  }

  $('.news-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
      responsive: [
      {
      breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
  });

                    
                  }); 
                  return false;
                });
              });

$('nav.dallık ul li a').click(function(e) {
  e.preventDefault();
  // animate content
  $('#content').addClass('animate_content');
  $('#content div').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('#content').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('#content').removeClass('fadeIn');
  }, 1500);

});

$('nav.dallık ul li a').click(function(e) {
  e.preventDefault();
  setTimeout(function() {
    $('#content div div').addClass('fadeIn');
  }, 1500);
});

