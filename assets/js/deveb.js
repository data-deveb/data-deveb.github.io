//Okyanus Okan Sefer ve Arcface'in desteği ile geliştirilen uyumsuzluk çözücüsü.
$(document).ready(function(i)	{
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1 ){

  var oranlar0 = ['1','2','3','4','5','6','7','8',
                 '9','10','11','12','13','14','15','16',
                 '17','18','19','20','21','22','23','24'];
  var oranlar1 = ['/1','/2','/3','/4','/5','/6','/7','/8',
                 '/9','/10','/11','/12','/13','/14','/15','/16',
                 '/17','/18','/19','/20','/21','/22','/23','/24'];
                 if (window.screen.width >= 0) {
                   $('[data-gnl]').each(function(i) {
                     var id = $(this).attr('data-gnl');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 300) {
                   $('[data-ufk]').each(function(i) {
                     var id = $(this).attr('data-ufk');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 576) {
                   $('[data-kçk]').each(function(i) {
                     var id = $(this).attr('data-kçk');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 768) {
                   $('[data-ort]').each(function(i) {
                     var id = $(this).attr('data-ort');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 992) {
                   $('[data-byk]').each(function(i) {
                     var id = $(this).attr('data-byk');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 1200) {
                   $('[data-kcm]').each(function(i) {
                     var id = $(this).attr('data-kcm');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }
                 if (window.screen.width >= 1900) {
                   $('[data-dev]').each(function(i) {
                     var id = $(this).attr('data-dev');
                     var deger = id.split(' ');
                     var degerkac = deger.length;
                     var deger0 = -1;
                     var deger1 = -1;
                     for(i=0;i < degerkac;){
                         if(oranlar0.lastIndexOf(deger[i]) != -1){
                          var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
                        }
                         if(oranlar1.lastIndexOf(deger[i]) != -1){
                          var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
                        }
                         i++;
                     }
                     if (deger0 != -1 && deger1 != -1){
                         var hesapla = 100/deger1.replace('/', '')*deger0;
                         var data = deger0+" "+deger1;
                         $(this).css('width',hesapla+'%');
                     }
                   });
                 }

                  // do stuff with ie-users
                 }
});
