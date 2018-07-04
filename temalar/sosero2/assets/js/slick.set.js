$(document).on('ready', function(){
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