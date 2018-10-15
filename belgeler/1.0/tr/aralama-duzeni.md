---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/aralama-duzeni
lang: tr
title: Aralama Düzeni
description: 
---

<p class="girlik">
  Ögeler arası aralıklar bırakarak daha estetik görünüm oluşturun. Kendiliğinden hesaplanan aralık genişlikleri, sabit aralık genişlikleri gibi bir kaç seçenekten istediğinizi kullanın. Daha fazlası aşağıda.
</p>
<h3>Soldan Sağdan Aralık: SAYI-| |-SAYI</h3>
<p>
	Bir ögeyi soldan veya sağdan bölümleme düzenine göre öteleyerek aralamak istiyorsak bu özelliği kullanırız.
	Diyelim ki /12'lik düzende 3'lük bölüm genişliğinde bir div etiketi oluşturdunuz. Sol yanından 3 kadar ve sağ yanından 3 kadar öteleme yapmak istiyorsanız aşağıdaki örnek gibi kullanabilirsiniz. Bu belletiden yola çıkarak ek olarak eklenmiş aşağıdaki diğer kullanımları da inceleyebilirsiniz.
	<br>
	-: aralık anlamına gelir. <br>
	|: yan anlamına gelir. <br>
	|-: sağ yan anlamına gelir. <br>
	-|: sol yan anlamına gelir. <br>
	Bunlarla birlikte eğer /SAYI tanımlanmışsa aralama düzeninin hangi bölümleme düzeninde olacağı tanımlanmıştır. Eğer /SAYI düzeni tanımlanmışsa bu etiket için her şey varsayılan /SAYI düzeninde oluşturulur.

</p>
<div class="örnek">
<h3>Önizleme</h3>
<div class="önizleme">
  <div data-gnl="3-| 3 |-3 /24">
  	3-| 3 |-3 /24
  </div>
  <div data-gnl="3-| 6 |-3">
    3-| 6 |-3
  </div>
  <div data-gnl="6-| 6">
    6-| 6
  </div>
  <div data-gnl="1-| 2 / |-1">
	1-| 2 / |-1
  </div>
  <div data-gnl="1-| 3 / |-1">
	1-| 3 / |-1
  </div>		
</div>
</div>
{% highlight html %}
    <div data-gnl="3-| 3 |-3 /24">
      3-| 3 |-3 /24
    </div>
    <div data-gnl="3-| 6 |-3">
      3-| 6 |-3
    </div>
    <div data-gnl="6-| 6">
      6-| 6
    </div>
    <div data-gnl="1-| 2 / |-1">
      1-| 2 / |-1
    </div>
    <div data-gnl="1-| 3 / |-1">
      1-| 3 / |-1
    </div>
{% endhighlight %}

<h3>araları-aralık & dengeli-aralık</h3>
<p>
  Sadece ögelerin birbirleri arasında aralık bırakılması istenildiği zaman kullanılması gereken değiştirge "araları-aralık" değiştirgesidir. Ekran genişliğine göre ögeler sabit genişlikteyse veya yüzdesel olarak aralıklı yayılabilecek durumdaysa kendiliğinden
  bir aralık oluşturur.
</p>
<p>
  Ögelerin her iki yandan aralık bırakmasını istiyorsanız "dengeli-aralık" değiştirgesini kullanın. Ekran genişliğine göre ögeler sağ ve sol yanlarından bulundukları şartlara göre aralık alırlar. Kenar ile öge arası aralık uzunluğu iki öge arası aralık
  uzunluğunun yarısı olacaktır.
</p>
<div class="örnek">
  <h3>Önizleme</h3>
  <div class="önizleme">
    <div data-gnl="araları-aralık">
      <div data-gnl="1 /8">
        araları-aralık
      </div>
      <div data-gnl="1 /8">
        araları-aralık
      </div>
      <div data-gnl="1 /8">
        araları-aralık
      </div>
    </div>
    <div data-gnl="dengeli-aralık">
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
    </div>
  </div>
</div>
{% highlight html %}
    <div data-gnl="araları-aralık">
      <div data-gnl="1 /8">
        araları-aralık
      </div>
      <div data-gnl="1 /8">
        araları-aralık
      </div>
      <div data-gnl="1 /8">
        araları-aralık
      </div>
    </div>
    <div data-gnl="dengeli-aralık">
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
      <div data-gnl="1 /8">
        dengeli-aralık
      </div>
    </div>
{% endhighlight %}

<h3>araları-aralık-SAYI</h3>
<p>
  Ögeler arasında sabit genişlikte aralık bırakmak için bu özelliği kullanın. Genişlik değerleri 1, 2, 3 sayılarıyla gösterilir. Değiştirgeyi "araları-aralık-1" gibi yazarak aşağıdaki gibi bir sonuç elde edersiniz.
</p>
<div class="örnek">
  <h3>Önizleme</h3>
  <div class="önizleme-1">
    <div data-gnl="araları-aralık-1 5-5">
      <div>
        <div class="kart">1. öğe</div>
      </div>
      <div>
        <div class="kart">2. öğe</div>
      </div>
      <div>
        <div class="kart">3. öğe</div>
      </div>
      <div>
        <div class="kart">4. öğe</div>
      </div>
      <div>
        <div class="kart">5. öğe</div>
      </div>
      <div data-gnl="2 /5">
        <div class="kart">6. öğe</div>
      </div>
      <div>
        <div class="kart">7. öğe</div>
      </div>
      <div>
        <div class="kart">8. öğe</div>
      </div>
      <div>
        <div class="kart">9. öğe</div>
      </div>
      <div>
        <div class="kart">10. öğe</div>
      </div>
      <div data-gnl="3 /5">
        <div class="kart">11. öğe</div>
      </div>
      <div>
        <div class="kart">12. öğe</div>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
    <div data-gnl="araları-aralık-1 5-5">
      <div>
        <div class="kart">1. öğe</div>
      </div>
      <div>
        <div class="kart">2. öğe</div>
      </div>
      <div>
        <div class="kart">3. öğe</div>
      </div>
      <div>
        <div class="kart">4. öğe</div>
      </div>
      <div>
        <div class="kart">5. öğe</div>
      </div>
      <div data-gnl="2 /5">
        <div class="kart">6. öğe</div>
      </div>
      <div>
        <div class="kart">7. öğe</div>
      </div>
      <div>
        <div class="kart">8. öğe</div>
      </div>
      <div>
        <div class="kart">9. öğe</div>
      </div>
      <div>
        <div class="kart">10. öğe</div>
      </div>
      <div data-gnl="3 /5">
        <div class="kart">11. öğe</div>
      </div>
      <div>
        <div class="kart">12. öğe</div>
      </div>
    </div>
{% endhighlight %}