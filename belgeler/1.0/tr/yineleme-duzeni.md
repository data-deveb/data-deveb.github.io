---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/yineleme-duzeni
lang: tr
title: Yineleme Düzeni
description: 
---
<p class="girlik">
     Bir-bir, iki-iki, üç-üç, ... gibi birbiriyle aynı genişlikte yinelenen bölümleri bir kerede oluşturmak için yineleme düzenini kullanın. 1'den 24'e kadar eşit bölümleri tanımlayın
  </p>
  <div class="örnek">
    <h3>Örnek</h3>
    <div class="önizleme">
      <div data-gnl="2-2" style="padding:0; border:0px solid red;">
        <div>
          <div class="kutu">2-2</div>
        </div>
        <div>
          <div class="kutu">2-2</div>
        </div>
        <div>
          <div class="kutu">2-2</div>
        </div>
        <div>
          <div class="kutu">2-2</div>
        </div>
        <div>
          <div class="kutu">2-2</div>
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="2-2">
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
      <div>
        <!-- içerik alanı -->
      </div>
    </div>
    {% endhighlight %}
  </div>

  <h2>Bölümleme Düzeniyle Kullanım</h2>
  <p>
    Yineleme düzenini bölümleme düzeniyle birlikte iç içe kullanabilirsiniz. Yineleme düzeni kullanmanız her bölümünün bu düzene uygun olması gerektiği anlamına gelmez. Bölümleme düzeniyle birlikte kullanım örneğini inceleyin.
  </p>
  <div class="örnek">
    <h3>Örnek</h3>
    <div class="önizleme">
      <div data-gnl="4-4" style="padding:0; border:0px solid red; background-color: transparent;">
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div data-gnl="2 /4">
          <div class="kutu">2 /4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div>
        <!-- içerik alanı -->
      </div>
      <div data-gnl="2 /4">
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
      <div>
        <!-- içerik alanı -->
      </div>
      <div>
        <!-- içerik alanı -->
      </div>
    </div>
    {% endhighlight %}
  </div>

  <h2>Esnetme Düzeniyle Kullanım</h2>
  <p>
    Yineleme düzenini esnetme düzeniyle birlikte iç içe kullanabilirsiniz. Yineleme düzeni kullanmanız her bölümünün bu düzene uygun olması gerektiği anlamına gelmez. Esnetme düzeniyle birlikte kullanım örneğini inceleyin.
  </p>
  <div class="örnek">
    <h3>Örnek</h3>
    <div class="önizleme">
      <div data-gnl="4-4" style="padding:0; border:0px solid red;  background-color: transparent;">
        <div data-gnl="1 /">
          <div class="kutu">1 /</div>
        </div>
        <div data-gnl="2 /">
          <div class="kutu">2 /</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div data-gnl="1 /">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="2 /">
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
      <div>
        <!-- içerik alanı -->
      </div>
      <div>
        <!-- içerik alanı -->
      </div>
    </div>
    {% endhighlight %}
  </div>
  <h2>Bölümleme ve Esnetme Düzeniyle Kullanım</h2>
  <p>
    Yineleme düzenini bölümleme ve esnetme düzeniyle birlikte iç içe kullanabilirsiniz. Yineleme düzeni kullanmanız her bölümünün bu düzene uygun olması gerektiği anlamına gelmez. Bölümleme ve esnetme düzeniyle birlikte kullanım örneğini inceleyin.
  </p>
  <div class="örnek">
    <h3>Örnek</h3>
    <div class="önizleme">
      <div data-gnl="4-4" style="padding:0; border:0px solid red; background-color: transparent;">
        <div data-gnl="1 /">
          <div class="kutu">1 /</div>
        </div>
        <div data-gnl="2 /">
          <div class="kutu">2 /</div>
        </div>
        <div data-gnl="2 /4">
          <div class="kutu">2 /4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
        <div>
          <div class="kutu">4-4</div>
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div data-gnl="1 /">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="2 /">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="2 /4">
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
      <div>
        <!-- içerik alanı -->
      </div>
    </div>
    {% endhighlight %}
  </div>