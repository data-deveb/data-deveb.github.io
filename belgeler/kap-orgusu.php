<?php include '../toprak/head.html';?>
<?php include '../toprak/header.html';?>
<div class="kap-merkez">
<div class="kap_gnl-11-12p beri-alt-1">
  <h1>Kap Örgüsü</h1>
  <p>Kap kelimesi genelde bir şeyi bir arada tutan fiziksel nesneler için kullanılır. Buradan yola çıkarak anlamını kodlama dünyasına yansıtabilirsiniz. Kap örgüsü İngilizce dilinde "grid system" diye anılır. Deveb çatısı altında bu örgü kendine özgü kullanımı ile diğer önyüz iskeletlerindeki kap örgülerinden farklıdır ve benzer yönleride kapsamaktadır. Çok amaçlı yönleri vardır.</p>
  <h2>Konular</h2>
  <ul>
    <li>Ana Yapısı</li>
    <li>Duyarlı Yapısı</li>
    <li>Kavramlar</li>
    <li>Kap Örgüsünün Özellikleri</li>
    <li>Bilinmesi Gerekenler</li>
    <li>Örnekler</li>
  </ul>

<div class="kap_gnl-1b">
  <div class="kap_gnl-0p beri-üst-1 beri-alt-1">
  <h2>Ana Yapı</h2>
  <p>Kap örgüsünün ana yapısı üç ana uygulamadan oluşmaktadır. Bölme uygulaması, parça uygulaması, oran uygulaması olarak isimlendirdiğimiz bu uygulamaları ayrıntılarıyla aşağıda öğrenebilirsiniz.</p>
  </div>
  <div class="kap_gnl-0p beri-üst-1 beri-alt-1">
    <h3>Bölme Yöntemi</h3>
    <p>Bir genişliği eşit ölçülerde bölmek istiyorsak bölme işlemini uygularız. Aşağıdaki örnekte 5 bölmeden oluşan bir kap yapısı oluşturuldu. Bunun için kap örgüsünde şu sınıf yazılır; "<span class="metin-olumlu">kap_gnl-5b</span>".<br><br>Eğer yavru sınıflarda "<span class="metin-olumlu">0p</span>" doğru şekilde tanımlandıysa bu sınıfın olduğu etiket ana etikette belirtilen bölme değerine göre genişlik değeri alacaktır. Örnekte görüldüğü gibi.</p>
    <iframe width="100%" height="300" src="//jsfiddle.net/deveb/5cd4kvqr/embedded/result,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
  </div>
  <div class="kap_gnl-0p beri-üst-1 beri-alt-1">
    <h3 class="beri-alt-1">Parça Yöntemi</h3>
    <p>Bulunduğu genişliği parçalara ayırarak kullanma yöntemidir. 10 farklı parça aralığı varsayılan olarak ayarlanmıştır. 5p, 6p, 8p, 9p, 10p, 12p, 16p, 18p, 20p, 24p olarak istediğiniz ekran ölçeğinde (gnl, byk, ort, kçk, ufk, mnk) kullanabilirsiniz. Örneğin 10p parça aralığını kullanacaksanız genişliği 10 eşit parçaya bölmek istediğinizi anlarız. Bununla birlikte farklı parça aralıklarını bir arada kullanabilme özelliği vardır. Buradan anlamanızı beklediğimiz, HTML dosyasının bir bölümünde 10p kullanıyorken, diğer bir bölümünde 16p kullanabilirsiniz.</p>
    <h4 class="beri-alt-1 beri-üst-1">Kullanımı</h4>
    <p>Kap örgüsü ile ilgili bir işlem yapacağınız zaman "kap" sınıfı her zaman yazılmalıdır. Bir genişliği tüm ekran ölçeklerinde 24 parçaya ayırarak kullanmak için sınıfı şöyle yazmalısınız; "kap gnl-24-24p". Böyle yazdığınız zaman bulunduğu genişliği baştan sonra kadar kaplayacaktır. Eğer 24 parçanın yarısı kadar kaplamak istiyorsanız; "kap gnl-12-24p" şeklinde yazmanız gerekmektedir. Buradan yola çıkarak diğer parça aralıklarını kullanabilirsiniz.</p>
    <h4 class="beri-alt-1 beri-üst-1">0p nedir?</h4>
    <p>"0p" kap örgüsü için boş değer anlamına gelir. Bu değer HTML'de üst sınıftan değer alma özelliğine sahiptir. Yani "boş parça" yazıldığı yerde bir kaynak sınıftan değer alabilir. Buna şöyle örnek verebiliriz "kap gnl-2b" > "kap gnl-0p". Bu durumda "2b" bölme değeri "0p" boş değerine 2li sütun görünümünde olması için 50% genişlik tanımlaması yapmış olacaksınız.</p>
    <iframe width="100%" height="300" src="//jsfiddle.net/deveb/2wa4s4jf/embedded/result,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
  </div>
  <div class="kap_gnl-0p beri-üst-1 beri-alt-1">
    <h3>Oran Yöntemi</h3>
    <p>Bir genişlikte birbirlerinin katları olacak şekilde oranlar kurabilirsiniz. Örneğin 1 3 1 oranında bir düzen yazabilirsiniz. Oran yöntemini "kap_gnl-1o" şeklinde yazarak kullanabilrisiniz</p>
    <iframe width="100%" height="300" src="//jsfiddle.net/deveb/hsr989pz/embedded/result,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>  </div>
</div>

  <h2>Kavramlar</h2>
  <h3>Ekran Çeşitleri</h3>
  <p>Ekran çeşitleri denildiğinde aklınıza gelmesi gereken ekranın fiziksel ölçeklerine uygun çözünürlük değerleridir.
  Bu değerler belli başlı isimlerle sınıflandırılmış ve isimlendirilmiştir. Bu isimleri şöyle sıralayabiliriz; genel, kocaman, dev, büyük, orta, küçük, ufak, minik. Ancak Deveb Önyüz İskeleti genel, büyük, orta, küçük, ufak isimlerini varsayılan ayarlarında destekleyerek gelir.
Her bir ismin kısaltılmış yazılışları vardır.</p>


<table class="tablo gnl-5-5p">
  <thead>
    <tr>
      <th>Ekran Çeşitleri</th>
      <th>Genel</th>
      <th>Kocaman</th>
      <th>Dev</th>
      <th>Büyük</th>
      <th>Orta</th>
      <th>Küçük</th>
      <th>Ufak</th>
      <th>Minik</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Kap Davranışları</th>
      <td colspan="8">Her zaman ayarlanabilir olarak yazılır.</td>
    </tr>
    <tr>
      <th>Sınıf önekleri</th>
      <td>gnl<br> <span class="metin-olumlu">açık</span> </td>
      <td>kcm<br> <span class="metin-olumsuz">kapalı</span></td>
      <td>dev<br> <span class="metin-olumsuz">kapalı</span></td>
      <td>byk<br> <span class="metin-olumlu">açık</span></td>
      <td>ort<br> <span class="metin-olumlu">açık</span></td>
      <td>kçk<br> <span class="metin-olumlu">açık</span></td>
      <td>ufk<br> <span class="metin-olumlu">açık</span></td>
      <td>mnk<br> <span class="metin-olumsuz">kapalı</span></td>
    </tr>
    <tr>
      <th>Oran Ölçekleri</th>
      <td colspan="8">0 ~ 23 oranlarında ölçekleme<br>Örnek: kap_gnl-2o</td>
    </tr>
    <tr>
      <th>Bölme Ölçekleri</th>
      <td colspan="8">1 ~ 24 parçaya eşit genişlikte ölçekleme<br>Örnek: kap_gnl-12b</td>
    </tr>
    <tr>
      <th>Parça Ölçekleri</th>
      <td colspan="8">5, 6, 8, 9, 10, 12, 16, 18, 20, 24 parça boyu olmak üzere 10 farklı ölçekleme<br>Örnek: kap_gnl-4-12p_byk-10-24p</td>
    </tr>
  </tbody>
</table>
</div>
</div>


<?php include '../toprak/foot.html';?>
