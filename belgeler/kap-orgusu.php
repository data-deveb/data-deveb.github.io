<?php include '../toprak/head.html';?>
<div id="header" class="kap_gnl-5-5p">
  <div class="kap_gnl-1o kap-merkez">
    <ul class="menü-genel">
      <li><a href="/deveb/belgeler/kap-orgusu.php">Kap Örgüsü</a></li>
      <li><a href="#">Boş menü</a></li>
      <li><a href="#">Boş menü</a></li>
      <li><a href="#">Boş menü</a></li>
      <li><a href="#">Boş menü</a></li>
      <li><a href="#">Boş menü</a></li>
    </ul>
  </div>
</div>
<div class="">
<div class="kap_gnl-8-12p">
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

<div class="">
  <div class="kap_gnl-5-5p">
  <h2>Ana Yapı</h2>
  <p>Kap örgüsünün ana yapısı üç ana uygulamadan oluşmaktadır. Bölme uygulaması, oranlama uygulaması, parça uygulaması olarak isimlendirdiğimiz bu uygulamaları ayrıntılarıyla aşağıda öğrenebilirsiniz.</p>
  </div>
  <div class="kap_gnl-5-5p">
    <h3>Bölme Uygulamasını Anlamak</h3>
    <p>Bir genişliği eşit ölçülerde bölmek istiyorsak bölme işlemini uygularız. Aşağıdaki örnekte 5 bölümden oluşan bir kap yapısı oluşturuldu. Bunun için kap örgüsünde şu sınıf yazılır; "<span class="metin-olumlu">kap_gnl-5b</span>".</p>
    <p>Eğer yavru sınıflarda "<span class="metin-olumlu">0p</span>" doğru şekilde tanımlandıysa bu sınıfın olduğu etiket ana etikette belirtilen bölme değerine göre genişlik değeri alacaktır. Örnekte görüldüğü gibi.</p>
    <script class="kap_gnl-5-5p" async src="//jsfiddle.net/deveb/5cd4kvqr/embed/html,result/"></script>
  </div>

</div>

  <h2>Kavramlar</h2>
  <h3>Ekran Çeşitleri</h3>
  <p>Ekran çeşitleri denildiğinde aklınıza gelmesi gereken ekranın fiziksel ölçeklerine uygun çözünürlük değerleridir.
  Bu değerler belli başlı isimlerle sınıflandırılmış ve isimlendirilmiştir. Bu isimleri şöyle sıralayabiliriz; genel, kocaman, dev, büyük, orta, küçük, ufak, minik. Ancak Deveb Önyüz İskeleti genel, büyük, orta, küçük, ufak isimlerini varsayılan ayarlarında destekleyerek gelir.
Her bir ismin kısaltılmış yazılışları vardır.</p>



<table class="tablo">
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
