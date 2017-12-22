$(document).ready(function(i)	{

  var oranlar0 = ['1','2','3','4','5','6','7','8',
                 '9','10','11','12','13','14','15','16',
                 '17','18','19','20','21','22','23','24'];
  var oranlar1 = ['1p','2p','3p','4p','5p','6p','7p','8p',
                 '9p','10p','11p','12p','13p','14p','15p','16p',
                 '17p','18p','19p','20p','21p','22p','23p','24p'];
  $('[data-gnl]').each(function(i) {
    var id = $(this).attr('data-gnl');
    var deger = id.split(' ');
    var degerkac = deger.length;
    var deger0 = 24;
    var deger1 = '24p';
    for(i=0;i < degerkac;){
        if(oranlar0.lastIndexOf(deger[i]) != -1){
        	var deger0 = oranlar0[oranlar0.lastIndexOf(deger[i])];
				}
        if(oranlar1.lastIndexOf(deger[i]) != -1){
        	var deger1 = oranlar1[oranlar1.lastIndexOf(deger[i])];
				}
        i++;
    }
    //alert(deger0);
    var hesapla = 100/deger1.replace('p', '')*deger0;
    var data = deger0+" "+deger1;
    $(this).css('width',hesapla+'%');
  });
});
