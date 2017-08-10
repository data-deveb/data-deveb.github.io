<?php include '../toprak/head.html';?>
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
      <td>_gnl-<br> açık</td>
      <td>_kcm-<br> kapalı</td>
      <td>_dev-<br> kapalı</td>
      <td>_byk-<br> açık</td>
      <td>_ort-<br> açık</td>
      <td>_kçk-<br> açık</td>
      <td>_ufk-<br> açık</td>
      <td>_mnk-<br> kapalı</td>
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
