---
layout: deveb/kylavuz
title: Bölme Düzeni
permalink: bölme-düzeni
kategori: [deveb, Döşenek Düzeni]
order: 2
---

# Bölme Düzeni - deveb.css

Bölme düzenimiz ile sizin için en en bölmeler oluşturmanızı kolaylaştırdık. Elinizi CSS'ye sürmeden HTML üzerinden bölmelere nece ölçü vereceğinizi ve nece döşeyeceğinizi öğrenin. Kullanılışı pek kolay olan deveb.css'in bölme düzeni bildiğiniz işittiğiniz sığ yöntemlerden uzaktır. 
{: .girmece}


<style>
  .girmece-örneği{
    gap: 10px;
  }
  .girmece-örneği > div{
    background-color: #ddd; 
    height: 150px; 
    --gap: 10px;
  }
  .örnek{
    border: 1px dashed #ccc;
    padding: 20px;
    background-color: #60a5fa1a;
    background-image: linear-gradient(135deg,#3b82f680 10%,#0000 0,#0000 50%,#3b82f680 0,#3b82f680 60%,#0000 0,#0000);
    background-size: 7.07px 7.07px;
  }
  .örnek .önizleme{
    
  }
  .örnek .önizleme .kutu{
    width:100%;
    padding: 20px;
    border: 1px solid #f55;
    background-color: #112;
    color: #fff;
  }
</style>

<div class="(4/4) girmece-örneği">
  <div class="(2/4)"></div>
  <div class="(1/4)"></div>
  <div class="(1/4)"></div>
  <div class="(1/4)" style="height: 50px;"></div>
  <div class="(3/4)" style="height: 50px;"></div>
</div>

Duyarlı nitelikte olan, 0-100 arası pay payda oranı ile işleyen bölme düzenini ilk kullanışta öğreneceksiniz. HTML'de belirttiğiniz ölçüleri yansıtmak için ikinci bir işlem yapmanıza gerek yok!

Dilediğiniz ende bölmeleri oluşturmaya çok yakınsınız. Hadi başlayalım.



<!-- Bölmeyi anlatacak görsel örnek eklenecek -->
<!-- -->

## Bir Bölme Nasıl Yapılır?

Bölme düzeninin baş özelliği bölmenin genişliğini belirtilen ölçüler ile bulunduğu yere göre oranlayabilmesidir. 0'dan 100'e dek olan sayılar ile pay payda değeri oluşturulabilir. "(SAYI/SAYI)" biçiminde yazılır.

### Örnek
Bir genişlikte iki ayrı bölme oluşturup soldaki bölmeyi sağdaki bölmenin yarı genişliğinde ayarlamak istiyoruz. Bunun için soldaki bölmenin değeri (1/3), sağdaki bölmenin değeri (2/3) olarak ayarlanmalıdır. Paydası 12 olan bir değer kullanmak istenmiş ise soldaki bölmenin değerini (4/12), sağdaki bölmenin değerini (8/12) olarak yazabiliriz. 
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="(1/3)">
      <div class="kutu">(1/3)</div>
    </div>
    <div class="(2/3)">
      <div class="kutu">(2/3)</div>
    </div>
    <div class="(4/12)">
      <div class="kutu">(4/12)</div>
    </div>
    <div class="(8/12)">
      <div class="kutu">(8/12)</div>
    </div>
  </div>
  {% highlight html %}
  <div class="(1/3)">
    <!-- içerik alanı -->
  </div>
  <div class="(2/3)">
    <!-- içerik alanı -->
  </div>
  <div class="(4/12)">
    <!-- içerik alanı -->
  </div>
  <div class="(8/12)">
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
<p></p>
<div class="örnek">
  <h4>Önizleme: Örnek 2</h4>
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
<p></p>
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