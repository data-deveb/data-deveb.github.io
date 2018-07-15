function sayfaYukle(adres, bittiktenSonra) {
    
    icerikGizle();

    sosero = null;
    $('#content').load(adres, function() {

        // ajax sonucunda sosero bir func ise çalıştır
        if (typeof sosero === 'function') sosero();

        // ekstradan bişeyler lazıms çalıştır...
        if (typeof bittiktenSonra === 'function') bittiktenSonra();
        
        icerikGoster();

    });

}


/**
 * LOADING GOSTER
 *
 */
function icerikGoster() {
    $('#content').addClass('animate_content');
    $('#content div').fadeOut(100).delay(2800).fadeIn();
}

/**
 * LOADING KAPAT
 *
 */
function icerikGizle() {

    setTimeout(function() {
      $('#content').removeClass('animate_content');
    }, 3200);

    setTimeout(function() {
        $('#content').removeClass('fadeIn');
    }, 1500);
    setTimeout(function() {
      $('#content div div').addClass('fadeIn');
    }, 1500);

}


$(document).on('ready', function() {

    // sayfa yüklendiğinde
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    var ilkyol = "html/" + filename;
    sayfaYukle(ilkyol);

    // ajax-getir data attr ile kullanım
    $('[data-ajax-getir]').on('click', function(e) {

        e.preventDefault();
        var yol = "html/";
        // gidilecek URL bul
        if ($(this).is('a')) {
            target = yol + $(this).attr('href');
        } else {
            target = yol + $(this).data('target');
        }

        // sayfayı yükle
        sayfaYukle(target);

    })

});
/*
$(document).on('ready', function() {

  $('#content').load('/temalar/sosero2/html/urunler.html');

  $('nav.dallık ul li a').click(function() {
    window.sosero = function() {}
    var page = $(this).attr('href');
    $('#content').load('/temalar/sosero2/html/'+ page, function(){
      window.sosero(); 
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

*/