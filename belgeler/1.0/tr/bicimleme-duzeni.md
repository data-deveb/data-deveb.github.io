---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/bicimleme-duzeni
lang: tr
title: Biçimleme Düzeni
description: 
---
<p class="girlik">
  Tasarımlarınızı kolaylıkla yapmanızı sağlayan biçimleme düzeninin özellikleriniz kullanın. Tam görüntülük, kap, sığ gibi özel amaçlı özellikleri yakından inceleyin.
</p>
<h2>Bütün Görüntülük</h2>
<p>
  Tasarımlarınızı bütün görüntülük düzeninde yapmak istiyorsanız <span class="simget">deveb</span>
  tarafından hazırlanan "görüntülük-kaplamı" değiştirgesini kullanacaksınız demektir. HTML body etiketine
  istediğiniz görüntülüğü belirterek kullanabilirsiniz.
</p>

<div class="örnek">
  <h3>Örnek</h3>
  <a href="#">Bu örneğin canlı durumunu görmek için tıklayın.</a> <br><br>
  {% highlight html %}
  <body data-gnl="görüntülük-kaplamı">
    Bu alanda bulunan her şey tam görüntülük düzeni içerisinde kalır.
  </body>
  {% endhighlight %}
</div>
<h2>Kap</h2>
<p>
  Tasarımlarınızı yaparken görüntülüklere göre sabit genişlikler kullanın. Bunun için "kap" değiştirgesini kullanmanız yeterlidir.
</p>
<div class="örnek">
  <h3>Örnek</h3>
  <div class="önizleme">
    <div data-gnl="kap">
      <div data-gnl="1 /3">
        <div class="kutu">1 /3</div>
      </div>
      <div data-gnl="1 /3">
        <div class="kutu">1 /3</div>
      </div>
      <div data-gnl="4">
        <div class="kutu">4</div>
      </div>
    </div>
  </div>
  {% highlight html %}
  <div data-gnl="kap">
    <div data-gnl="1 /3">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /3">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="4">
      <!-- içerik alanı -->
    </div>
  </div>
  {% endhighlight %}
</div>

<h2>Kaplam</h2>
<p>
  Enine boyuna bir alanı bulunduğu yere sığdırmak istediğiniz tasarımlarınız olabilir. O zaman "sığ" değiştirgesini kullanmanız yeterli olur. Bazı durumlarda "sütun" değiştirgesiyle birlikte kullanmanız gerebilir. Daha iyi anlamak için örnekleri inceleyiniz.
</p>

<div class="örnek">
  <h3>Örnek</h3>
  <a href="#">Bu örneğin canlı durumunu görmek için tıklayın.</a> <br><br>
  {% highlight html %}
  <body data-gnl="görüntülük-kaplamı">
    <div data-gnl="kaplam">
      Bu alan görüntülüğe göre tam kaplama yapılmıştır.
    </div>
  </body>
  {% endhighlight %}
</div>

<h2>0 (sıfır)</h2>
<p>
  Tasarımlarınızı yaparken içeriğe göre genişlik kullanmak isteyebilrsiniz.
  Bunun için "0" değiştirgesini kullanmanız yeterlidir.
</p>
<div class="örnek">
  <h3>Örnek</h3>
  <div class="önizleme">
    <div data-gnl="0">
      <div class="kutu">0</div>
    </div>
    <div data-gnl="4">
      <div class="kutu">4</div>
    </div>
    <div data-gnl="6">
      <div class="kutu">6</div>
    </div>
  </div>
</div>  
{% highlight html %}
  <div data-gnl="0">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="4">
    <!-- içerik alanı -->
  </div>
  <div data-gnl="6">
    <!-- içerik alanı -->
  </div>
{% endhighlight %}


<h3>Kaymadan & Dürmeden</h3>
  <p>"kaymadan" içeriği dışarı taşmasını engeller.</p>
  <p>"dürmeden" içeriği alt satırlara dürülmesini engeller ve tek satırda gösterir.</p>
  
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="1 /24 kaymadan">
        <div class="kutu">Taşmadan yazamadıklarımızdan mısınız?</div>
      </div>
      <div data-gnl="dürmeden">
        <div>
          <div class="kutu">Buradaki içerikler dürmeden etkisi altında görüntülenmektedir.</div>
        </div>
        <div>
          <div class="kutu">Buradaki içerikler dürmeden etkisi altında görüntülenmektedir.</div>
        </div>
        <div>
          <div class="kutu">Buradaki içerikler dürmeden etkisi altında görüntülenmektedir.</div>
        </div>
        <div>
          <div class="kutu">Buradaki içerikler dürmeden etkisi altında görüntülenmektedir.</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="1 /24 kaymadan">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="dürmeden">
      <div>
        <!-- içerik alanı -->
      </div>
      <div>
        <!-- içerik alanı -->
      </div>
      <div>
        <!-- içerik alanı -->
      </div>
      <div>
        <!-- içerik alanı -->
      </div>
    </div>
  {% endhighlight %}