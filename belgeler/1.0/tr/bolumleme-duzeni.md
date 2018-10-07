---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/bolumleme-duzeni
lang: tr
title: Bölümleme Düzeni
description: 
---
<p class="girlik">
    Görüntülük örgüsüyle kullanılarak görüntülüklere göre uyarlanabilen, 1'den 24'e kadar çoklu-ölçü özelliğini barındıran, bölümlük ölçüsünün varsayılanı 12 olarak tanımlı, yüzdesel genişlikte bölümler oluşturulabilen, özelleştirilebilir özellikte geliştirilmiş, güçlü kap örgüsü düzenimizi kullanın.
  </p>

  <p></p>
  <div data-gnl="o">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NKGZ8HWdnFw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
  <p></p>


  <h3>"SAYI /SAYI" Kullanımı</h3>
  <p>
    Bölümleme düzeni özünde bir genişliği belirli ölçülere bölerek bölümler oluşturma düzenidir. Oluşturulan bölümler yüzdesel olarak genişlik değeri alırlar. Bu yönüyle en çok kullanılan önyüz çatısı özellikleri arasında yer alır. 1'den 24 bölümlüğe kadar kullanılabilir ölçüler sunması nedeniyle duyarlığı yüksektir. "<b>SAYI /SAYI</b>" söz dizimine göre yazarak kullanılabilir. Yalnızca "<b>SAYI</b>" değiştirgesi yazıldığında varsayılan olarak tanımlı olan 12 bölümlük etkisi altına girer. 
  </p>
  <p class="örnek">
    Bir genişliği iki ayrı bölüme bölüp soldakini sağdaki bölümün yarısı kadar ayarlamak istiyorsanız birinci bölüm için "1 /3" ve ikinci bölüm için "2 /3" değiştirgelerini yazabilirsiniz. Varsayılan 12 bölümlüğü kullanmayı düşünüyorsanız birinci bölüm için "4" ikinci bölüm için "8" değiştirgesini tanımlamanız yeterli olacaktır.
  </p>
  <div class="örnek">
    <div class="önizleme">
      <div data-gnl="1 /3">
        1 /3
      </div>
      <div data-gnl="2 /3">
        2 /3
      </div>
      <div data-gnl="4">
        4
      </div>
      <div data-gnl="8">
        8
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="2 /3">
      2 /3
    </div>
    <div data-gnl="4">
      4
    </div>
    <div data-gnl="8">
      8
    </div>
    {% endhighlight %}
  </div>

  <p>
    Kap bölümleri oluşturmak amacıyla bölümleme yazdığınız an tarayıcılara özetle şöyle demiş olursunuz; "<i>Bulunduğum genişliği <b>/SAYI</b> kadar eşit bölüme bölerek <b>SAYI</b> kadar bölümlerin toplam genişliğini kullanacağım</i>". Şöyle ki; <b>SAYI</b> = bölüm, <b>/SAYI</b> = bölen veya bölümlük anlamına gelir. Her kullanımda genişliğin kullanılabilir boş bölümleri dolmaya başlar. Sınırı taşıran bölümler kendiliğinden alta dizilecek biçimde kayar.
  </p>
  <p class="örnek">
    Oluşturduğunuz öğenin bulunduğu yerdeki genişliğin yarısı kadar bir genişlik kullanmak istiyorsanız "1 /2", "2 /4", "3 /6", "4 /8", "5 /10", "6 /12", "7 /14", "8 /16", "9 /18", "10 /20", "11 /22" veya "12 /24" bölümlemelerinden dilediğinizi kullanmanız yeterlidir.
  </p>
  <div class="örnek">
    <div class="önizleme">
      <div data-gnl="6">
        6
      </div>
      <div data-gnl="1 /2">
        1 /2
      </div>
      <div data-gnl="3 /6">
        3 /6
      </div>
      <div data-gnl="5 /10">
        5 /10
      </div>
      <div data-gnl="8 /16">
        8 /16
      </div>
      <div data-gnl="11 /22">
        11 /22
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="6">
      6
    </div>
    <div data-gnl="1 /2">
      1 /2
    </div>
    <div data-gnl="3 /6">
      3 /6
    </div>
    <div data-gnl="5 /10">
      5 /10
    </div>
    <div data-gnl="8 /16">
      8 /16
    </div>
    <div data-gnl="11 /22">
      11 /22
    </div>
    {% endhighlight %}
  </div>

  <p>
    Bölümleme düzeni kullanımının nasıl olduğunu doğrudan göstermeden önce bir kurgulama yapalım. <i>Bir çalışmamız 3 eşit genişliğe bölünecek olsun. Diğer bir çalışmamızda 20 bölümlük kullanılarak kendi aralarında 3 ayrı genişlikte olsun.</i> İlk kurgumuzu gerçekleştirmek için "<b>1 /3</b>" değiştirgelerini uygun yerlere yazabiliriz. Diğerini ise "<b>3 /20</b>", "<b>10 /20</b>", "<b>7 /20</b>" olarak yazabiliriz.
  </p>

  <p></p>
  <div class="örnek">
    <h4>Önizleme: Örnek 1</h4>
    <div class="önizleme">
      <div data-gnl="1 /3">
        1 /3
      </div>
      <div data-gnl="1 /3">
        1 /3
      </div>
      <div data-gnl="1 /3">
        1 /3
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="1 /3">
      1 /3
    </div>
    {% endhighlight %}
  </div>

  <div class="örnek">
    <h3>Önizleme: Örnek 2</h3>
    <div class="önizleme">
      <div data-gnl="3 /20">
        3 /20
      </div>
      <div data-gnl="10 /20">
        10 /20
      </div>
      <div data-gnl="7 /20">
        7 /20
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="3 /20">
      3 /20
    </div>
    <div data-gnl="10 /20">
      10 /20
    </div>
    <div data-gnl="7 /20">
      7 /20
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
        1 /3
      </div>
      <div data-gnl="1 /3">
        1 /3
      </div>
      <div data-gnl="1 /3">
        1 /3
      </div>
      <div data-gnl="3 /20">
        3 /20
      </div>
      <div data-gnl="10 /20">
        10 /20
      </div>
      <div data-gnl="7 /20">
        7 /20
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="1 /3">
      1 /3
    </div>
    <div data-gnl="3 /20">
      3 /20
    </div>
    <div data-gnl="10 /20">
      10 /20
    </div>
    <div data-gnl="7 /20">
      7 /20
    </div>
    {% endhighlight %}
  </div>

  <p></p>

  <h3>"SAYI /SAYI" >> "SAYI /SAYI" Kullanımı</h3>

  <p>
    Bu düzeni kullanarak bir kap bölümü yazdığınızda tarayıcıya şunu dersiniz; <i>"Kapsayan html etiketinde belirttiğim <b>/SAYI</b> kapsayan etiketin bölümlüğüdür. Kapsanan etiketlerde belirttiğim <b>/SAYI</b> kapsanan etiketlerin bölümlüğüdür. Kapsanan etiketlerde yalnızca <b>SAYI</b> yazarak genişliklerimi belirtebilirsem bölümlük değeri varsayılan değer olan 12 olacaktır."</i>
  </p>
  <p></p>
  <div class="örnek">
    <h4>Önizleme</h4>
    <div class="önizleme">
      <div data-gnl="2 /2">
        <p>
          Görüntülüklerde bulunduğu genişliğin 2/2 kadarını kapla.
        </p>
        <div data-gnl="1 /4">
          Görüntülüklerde bulunduğu genişliğin 1/4 kadarını kapla.
        </div>
        <div data-gnl="1 /4">
          Görüntülüklerde bulunduğu genişliğin 1/4 kadarını kapla.
        </div>
        <div data-gnl="3">
          Görüntülüklerde bulunduğu genişliğin 3/12 kadarını kapla.
        </div>
        <div data-gnl="3">
          Görüntülüklerde bulunduğu genişliğin 3/12 kadarını kapla.
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="2 /2">
      <p>
        Görüntülüklerde bulunduğu genişliğin 2/2 kadarını kapla.
      </p>
      <div data-gnl="1 /4">
        Görüntülüklerde bulunduğu genişliğin 1/4 kadarını kapla.
      </div>
      <div data-gnl="1 /4">
        Görüntülüklerde bulunduğu genişliğin 1/4 kadarını kapla.
      </div>
      <div data-gnl="3">
        Görüntülüklerde bulunduğu genişliğin 3/12 kadarını kapla.
      </div>
      <div data-gnl="3">
        Görüntülüklerde bulunduğu genişliğin 3/12 kadarını kapla.
      </div>
    </div>
    {% endhighlight %}
  </div>

  <h3>Esnetme Ve Bölümleme Düzeni Karşılaştırması</h3>
  <p>
  Esnetme düzeni ile bölümleme düzeni aynı şey demek değildir. Esnetme düzeninde her esneme birbiri arasında etkileşimli olup, bölümleme düzeninde ise yüzdesel genişlik oluşturulur. Esnetme düzeninde yanları içten öteleme ölçüleri sayıştan sayılmaz. Size bir örnek gösterelim. Göreceğiniz üzere birbirleriyle eşit genişlikte olmuyorlar. Bunlarla birlikte esnetme düzeni bulunduğu yerdeki kapların sayısı arttırkça aynı yerde esnemeye devam ederler.</p>
  <p></p>
  <div class="örnek">
    <h4>Önizleme</h4>
    <div class="önizleme">
      <div>
        <div data-gnl="1 /">
          1 /
        </div>
        <div data-gnl="4 /">
          4 /
        </div>
        <div data-gnl="2 /">
          2 /
        </div>
      </div>
      <div>
        <div data-gnl="1 /7">
          1 /7
        </div>
        <div data-gnl="4 /7">
          4 /7
        </div>
        <div data-gnl="2 /7">
          2 /7
        </div>
      </div>
    </div>
    {% highlight html %}
    <div>
      <div data-gnl="1 /">
        1 /
      </div>
      <div data-gnl="4 /">
        4 /
      </div>
      <div data-gnl="2 /">
        2 /
      </div>
    </div>
    <div>
      <div data-gnl="1 /7">
        1 /7
      </div>
      <div data-gnl="4 /7">
        4 /7
      </div>
      <div data-gnl="2 /7">
        2 /7
      </div>
    </div>
    {% endhighlight %}
  </div>
  <p></p>
  <p></p>