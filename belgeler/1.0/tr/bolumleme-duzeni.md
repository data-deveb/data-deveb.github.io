---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/bolumleme-duzeni
lang: tr
title: Bölümleme Düzeni
description: 
---
<p class="girlik">
  Görüntülüklere göre uyarlanabilir, eş ende 1'den 24'e dek özgürce kullanılabilir, varsayılan ölçeği 12 bölümlük olarak tanımlı, yüzdesel oranda bölümleme, özelleştirilebilir kesitlik örgüsü düzeni.
</p>
<div data-gnl="o" style="margin: 20px 0;">
  <div data-gnl="11 araları-aralık-1">
    <div data-gnl="4 araları-aralık-1">
      <div>
        <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
      </div>
      <div>
        <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
      </div>
    </div>
    <div data-gnl="4">
      <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
    </div>
    <div data-gnl="4">
      <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
    </div>
    <div data-gnl="8">
      <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
    </div>
    <div data-gnl="4">
      <div style="background-color: #e0e0e0; min-height: 150px; height: 100%;"></div>
    </div>
  </div>
</div>
<p>
  Kullanımı çok kolay olacak biçimde oluşturulmuş bölümleme düzeni, çalışmalarınızı yazarken kendini gösterecektir. Diğer çatıların yaptığı gibi sizi tek bir düzene bağımlı bırakmaz. Dilediğiniz ende dilediğiniz ölçeği kullanarak bu kolaylığı tatmış olacaksınız. Üsteklik bir tek altyapı ayarını bile değiştirmeden...
</p>
<h3>Bölümleme Nasıl Yapılır?</h3>
<p>
  Bölümleme düzeninin ana özelliği bulunduğu yerin genişliğine göre belirtilen ölçülerle yüzdesel oranlı bölüm oluşturmasıdır. Bu düzen en çok kullanılmak istenen genişlik tanımlama yöntemlerinden biridir. 1'den 24 bölümlüğe dek kullanılabilir ölçüler tek bir ayarı değiştirmeden kullanıma sunulur. Söz dizimi "<b>SAYI /SAYI</b>" biçiminde yazılarak kullanılır. Söz dizimini yalnızca "<b>SAYI</b>" biçiminde de kullanabilirsiniz. Bu durumda bölüm genişlikleri varsayılan ölçek değeri olan 12'lik düzene göre tanımlanacaktır.
</p>
<p class="örnek">
  Bir genişliği iki ayrı bölüme bölüp soldakini sağdaki bölümün yarısı kadar ayarlamak istiyorsanız birinci bölüm için "1 /3" ve ikinci bölüm için "2 /3" değerlerini yazabilirsiniz. Varsayılan 12 bölümlüğü kullanmayı düşünüyorsanız birinci bölüm için "4" ikinci bölüm için "8" değerini tanımlamanız yeterli olacaktır.
</p>
<div class="örnek">
  <div class="önizleme">
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="2 /3">
      <div class="kutu">2 /3</div>
    </div>
    <div data-gnl="4">
      <div class="kutu">4</div>
    </div>
    <div data-gnl="8">
      <div class="kutu">8</div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="2 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="4">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="8">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

<p>
  Bölümler oluşturmak amacıyla bölümleme yazdığınızda tarayıcılara özetle şöyle demiş olursunuz; "<i>Yer aldığım genişliği <b>/SAYI</b> ölçeğince eşit bölüme bölerek <b>SAYI</b> toplamınca bölüm genişliğini kullanacağım</i>". Şöyle ki; <b>SAYI</b> bölüm, <b>/SAYI</b> bölen anlamına gelir. Her kullanımda genişliğin kullanılabilecek kadar boş bölümleri doldurulur. Genişliği taşacak durumda bir bölüm geldiğinde kendiliğinden alta dürülürek kayar.
</p>
<p class="örnek">
  Oluşturduğunuz öğenin bulunduğu yerdeki genişliğin yarısı kadar bir genişlik kullanmak istiyorsanız "1 /2", "2 /4", "3 /6", "4 /8", "5 /10", "6 /12", "7 /14", "8 /16", "9 /18", "10 /20", "11 /22" veya "12 /24" bölümlemelerinden dilediğinizi kullanmanız yeterlidir.
</p>
<div class="örnek">
  <div class="önizleme">
    <div data-gnl="6">
      <div class="kutu">6</div>
    </div>
    <div data-gnl="1 /2">
      <div class="kutu">1 /2</div>
    </div>
    <div data-gnl="3 /6">
      <div class="kutu">3 /6</div>
    </div>
    <div data-gnl="5 /10">
      <div class="kutu">5 /10</div>
    </div>
    <div data-gnl="8 /16">
      <div class="kutu">8 /16</div>
    </div>
    <div data-gnl="11 /22">
      <div class="kutu">11 /22</div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="6">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="1 /2">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="3 /6">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="5 /10">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="8 /16">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="11 /22">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

<p>
  Bölümleme düzeni kullanımının nasıl olduğunu doğrudan göstermeden önce bir kurgulama yapalım. <i>Bir çalışmamız 3 eşit genişliğe bölünecek olsun. Diğer bir çalışmamızda 20 bölümlük kullanılarak kendi aralarında 3 ayrı genişlikte olsun.</i> İlk kurgumuzu gerçekleştirmek için "<b>1 /3</b>" değerlerini uygun yerlere yazabiliriz. Diğerini ise "<b>3 /20</b>", "<b>10 /20</b>", "<b>7 /20</b>" olarak yazabiliriz.
</p>

<p></p>
<div class="örnek">
  <h4>Önizleme: Örnek 1</h4>
  <div class="önizleme">
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

<div class="örnek">
  <h3>Önizleme: Örnek 2</h3>
  <div class="önizleme">
    <div data-gnl="3 /20">
      <div class="kutu">3 /20</div>
    </div>
    <div data-gnl="10 /20">
      <div class="kutu">10 /20</div>
    </div>
    <div data-gnl="7 /20">
      <div class="kutu">7 /20</div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="3 /20">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="10 /20">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="7 /20">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

<div class="örnek">
  <h4>Önizleme: Örnek 3</h4>
  <p>
    Örnek 1 ve 2'yi bir arada işlemek
  </p>
  <div class="önizleme">
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="1 /3">
      <div class="kutu">1 /3</div>
    </div>
    <div data-gnl="3 /20">
      <div class="kutu">3 /20</div>
    </div>
    <div data-gnl="10 /20">
      <div class="kutu">10 /20</div>
    </div>
    <div data-gnl="7 /20">
      <div class="kutu">7 /20</div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="1 /3">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="3 /20">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="10 /20">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="7 /20">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

<p></p>

<h3>"SAYI /SAYI" >> "SAYI /SAYI" Kullanımı</h3>

<p>
  Bu düzeni kullanarak bir bölüm açtığınızda tarayıcıya şunu dersiniz; <i>"Kapsayan html etiketinde belirttiğim <b>/SAYI</b> kapsayan etiketin bölümlüğüdür. Kapsanan etiketlerde belirttiğim <b>/SAYI</b> kapsanan etiketlerin bölümlüğüdür. Kapsanan etiketlerde yalnızca <b>SAYI</b> yazarak genişliklerimi belirtebilirsem bölümlük değeri varsayılan değer olan 12 olacaktır."</i>
</p>

<p></p>

<div class="örnek">
  <h4>Önizleme</h4>
  <div class="önizleme">
    <div class="kutu" data-gnl="2 /2">
      <p>
        Bulunduğu genişliği 2/2 oranında kapla.
      </p>
      <div data-gnl="1 /4">
        <div class="kutu">Bulunduğu genişliği 1/4 oranında kapla.</div>
      </div>
      <div data-gnl="1 /4">
        <div class="kutu">Bulunduğu genişliği 1/4 oranında kapla.</div>
      </div>
      <div data-gnl="3">
        <div class="kutu">Bulunduğu genişliği 3/12 oranında kapla.</div>
      </div>
      <div data-gnl="3">
        <div class="kutu">Bulunduğu genişliği 3/12 oranında kapla.</div>
      </div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="2 /2">
    <p>
      <!-- içerik alanı -->
    </p>
    <div data-gnl="1 /4">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /4">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3">
      <!-- içerik alanı -->
    </div>
  </div>
  {% endhighlight %}
</div>

<p></p>

<h3>Bölümleme Düzeni & Esnetme Düzeni Tasımlama</h3>
<p>
  Esnetme düzeni ile bölümleme düzeni aynı şey demek değildir. Esnetme düzeninde her esneme birbiri arasında etkileşimli olup, bölümleme düzeninde ise yüzdesel genişlik oluşturulur. Esnetme düzeninde yanları içten öteleme ölçüleri sayıştan sayılmaz. Size bir örnek gösterelim. Göreceğiniz üzere birbirleriyle eşit genişlikte olmuyorlar. Bunlarla birlikte esnetme düzeni bulunduğu yerdeki kapların sayısı arttırkça aynı yerde esnemeye devam ederler.
</p>

<p></p>

<div class="örnek">
  <h4>Önizleme</h4>
  <div class="önizleme">
    <div>
      <div class="kutu" data-gnl="1 /">
        1 /
      </div>
      <div class="kutu" data-gnl="4 /">
        4 /
      </div>
      <div class="kutu" data-gnl="2 /">
        2 /
      </div>
    </div>
    <div>
      <div class="kutu" data-gnl="1 /7">
        1 /7
      </div>
      <div class="kutu" data-gnl="4 /7">
        4 /7
      </div>
      <div class="kutu" data-gnl="2 /7">
        2 /7
      </div>
    </div>
  </div>
  {% highlight html %}
  <div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="4 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="2 /">
      <!-- içerik alanı -->
    </div>
  </div>
  <div>
    <div data-gnl="1 /7">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="4 /7">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="2 /7">
      <!-- içerik alanı -->
    </div>
  </div>
  {% endhighlight %}
</div>
<p></p>
<p></p>