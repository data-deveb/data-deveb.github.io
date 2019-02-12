---
layout: default
permalink: 1.0/tr/icerik/basimcilik
lang: tr
title: Basımcılık
description: 
---

<p class="girlik">
  Başlıklar, yazmıklar, düz yazılar, liste öğeleri gibi yazıya dayalı olan her türlü ögeler için basımcılık ayarları.
</p>
<h2>Başlıklar</h2>
<p>
  Bütün HTML başlık etiketleri için kullanımı geçerlidir. 
</p>
<div class="örnek">
<div class="önizleme">
  <h1>Başlık H1 Etiketi (40 benek)</h1>
  <h2>Başlık H2 Etiketi (32 benek)</h2>
  <h3>Başlık H3 Etiketi (28 benek)</h3>
  <h4>Başlık H4 Etiketi (24 benek)</h4>
  <h5>Başlık H5 Etiketi (20 benek)</h5>
  <h6>Başlık H6 Etiketi (16 benek)</h6>
</div>
</div>
{% highlight html %}
    <h1>Başlık H1 Etiketi</h1>
    <h2>Başlık H2 Etiketi</h2>
    <h3>Başlık H3 Etiketi</h3>
    <h4>Başlık H4 Etiketi</h4>
    <h5>Başlık H5 Etiketi</h5>
    <h6>Başlık H6 Etiketi</h6>
{% endhighlight %}

<br>
<h2>Yazmıklar (Paragraflar)</h2>
<div class="örnek">
<div class="önizleme">
  <p>
    Yazmık, bir yazının bir dize ucundan öteki dize ucuna kadar olan bütün bölüme denir. Her yazmıkta, tek bir ana düşünce çevresinde öbeklenmiş birçok tümce bulunabilir. Bu tümceler yazmıkta bir anlam bütünlüğü sağlar. Daha ayrıntılı bir anlatımla yazmık bir duyguyu, bir düşünceyi, bir isteği, bir öneriyi, bir olayı yalnızca bir yönüyle anlatmaya yarayan yazı türüdür.
  </p>
</div>
</div>
{% highlight html %}
    <p>
      Yazmık, bir yazının bir dize ucundan öteki dize ucuna kadar olan bütün bölüme denir. Her yazmıkta, tek bir ana düşünce çevresinde öbeklenmiş birçok tümce bulunabilir. Bu tümceler yazmıkta bir anlam bütünlüğü sağlar. Daha ayrıntılı bir anlatımla yazmık bir duyguyu, bir düşünceyi, bir isteği, bir öneriyi, bir olayı yalnızca bir yönüyle anlatmaya yarayan yazı türüdür.
    </p>
{% endhighlight %}

<br>
<h2>Anlamsal Yazı Ögeleri</h2>
<div class="örnek">
<div class="önizleme">
  <p>
    <b>&#60;mark&#62;&#60;/mark&#62;</b>
    <br>
    <mark>İmlenmiş yazı.</mark> Yazıyı vurgulamak için im etiketini kullanabilirsiniz.
  </p>
  <p>
    <b>&#60;del&#62;&#60;/del&#62;</b>
    <br>
    <del>Silinmiş yazı.</del> Bir dizedeki yazıyı silinmiş olarak belirtmek için sil etiketini kullanabilirsiniz.
  </p>
  <p>
    <b>&#60;s&#62;&#60;/s&#62;</b>
    <br>
    <s>Doğru olmayan yazı.</s> Artık doğru olduğu düşünülmeyen yazıyı belli etmek için kullanılır.
  </p>
  <p>
    <b>&#60;ins&#62;&#60;/ins&#62;</b>
    <br>
    <ins>Ek yazı.</ins> Bu yazıya vurgulama belgeye ek olarak eklendiği belli olması amacıyla yapılmıştır.
  </p>
  <p>
    <b>&#60;u&#62;&#60;/u&#62;</b>
    <br>
    <u>Altı çizili yazı.</u> Bu yazıya vurgulama altı çizili olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;small&#62;&#60;/small&#62;</b>
    <br>
    <small>Küçük yazı.</small> Bu yazıya küçüklük vurgulaması yapılmıştır.
  </p>
  <p>
    <b>&#60;strong&#62;&#60;/strong&#62;</b>
    <br>
    <strong>Kaba yazı.</strong> Bu yazıya vurgulama kaba olarak yapılmıştır.
  </p>
    <p>
    <b>&#60;b&#62;&#60;/b&#62;</b>
    <br>
    <b>Kalın yazı.</b> Bu yazıya vurgulama kalın olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;em&#62;&#60;/em&#62;</b>
    <br>
    <em>Vurgulanan eğik yazı.</em> Bu yazıya vurgulama eğik olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;i&#62;&#60;/i&#62;</b>
    <br>
    <i>Eğik yazı.</i> Bu yazıya bir anlamı olmaksızın vurgulama eğik olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;abbr&#62;&#60;/abbr&#62;</b>
    <br>
    <abbr title="Yığmaşık Duysu Yığası">YDY</abbr> Bu yazı kısaltma olduğu için açıklama eklenmiştir.
  </p>
  <p>
    <b>&#60;sup&#62;&#60;/sup&#62;</b>
    <br>
    <sup>Üst yazı.</sup> Bu yazıya vurgulama üstte olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;sub&#62;&#60;/sub&#62;</b>
    <br>
    <sub>Alt yazı.</sub> Bu yazıya vurgulama altta olarak yapılmıştır.
  </p>
  <p>
    <b>&#60;kbd&#62;&#60;/kbd&#62;</b>
    <br>
    <kbd>CTRL + C</kbd> Tuşlukta basılarak oluşturulacak tuşluk girdisinin yazısıdır.
  </p>
  <p>
    <b>&#60;code&#62;&#60;/code&#62;</b>
    <br>
    <code>&#60;p&#62;Burası yazmık alanıdır.&#60;/p&#62;</code> Yazılan buyrukları vurgulamak için kullanılan etikettir.
  </p>
</div>
</div>
{% highlight html %}
    <mark>İmlenmiş yazı.</mark>
    <del>Silinmiş yazı.</del>
    <s>Doğru olmayan yazı.</s>
    <ins>Ek yazı.</ins>
    <u>Altı çizili yazı.</u>
    <small>Küçük yazı.</small>
    <strong>Kaba yazı.</strong>
    <b>Kalın yazı.</b>
    <em>Vurgulanan eğik yazı.</em>
    <i>Eğik yazı.</i>
    <abbr title="Yığmaşık Duysu Yığası">YDY</abbr>
    <sup>Üst yazı.</sup>
    <sub>Alt yazı.</sub>
    <kbd>CTRL + C</kbd>
{% endhighlight %}

<br>
<h2>Öbek Alıntı</h2>
<div class="örnek">
<div class="önizleme">
  <blockquote>
    <p>Gençler, bilim için akıllarını matematiğe sarılarak, gönüllerini ise Türkçeye sarılarak geliştireceklerdir. </p>
    <cite>- Oktay Sinanoğlu</cite>
  </blockquote>
</div>
</div>
{% highlight html %}
    <blockquote>
      <p>Gençler, bilim için akıllarını matematiğe sarılarak, gönüllerini ise Türkçeye sarılarak geliştireceklerdir. </p>
      <cite>Oktay Sinanoğlu</cite>
    </blockquote>
{% endhighlight %}

<br>
<h2>Liste</h2>
<div class="örnek">
<div class="önizleme">
  <dl>
    <dt>Açıklanan liste ögesi 1</dt>
    <dd>Açıklanan liste ögesi 1.1</dd>
  </dl>

  <ul>
    <li>Sıralanmamış liste ögesi 1</li>
    <li>Sıralanmamış liste ögesi 2</li>
  </ul>

  <ol>
    <li>Sıralanmış liste ögesi 1</li>
    <li>Sıralanmış liste ögesi 2</li>
  </ol>
</div>
</div>
{% highlight html %}
    <dl>
      <dt>Açıklanan liste ögesi 1</dt>
      <dd>Açıklanan liste ögesi 1.1</dd>
    </dl>
    <ul>
      <li>Sıralanmamış liste ögesi 1</li>
      <li>Sıralanmamış liste ögesi 2</li>
    </ul>
    <ol>
      <li>Sıralanmış liste ögesi 1</li>
      <li>Sıralanmış liste ögesi 2</li>
    </ol>
{% endhighlight %}
<br>
<h2>Genel Ayarlar</h2>
<p>
  Yazılar varsayılan değere göre boyutlarını kazanırlar. Yazı boyutu geniş görüntülükler için 16 benek olarak ayarlıyken, dar görüntülükler için 14 benek olarak ayarlanmıştır. İsteğe bağlı olarak bu değerler değiştirilebilir. Tüm yazılar bu değerlere göre ölçeklenecektir. Eğer dış css dosyalarında doğrudan bir ölçü tanımlarsanız bu ölçüler etki dışında kalır. Ayarları değiştirmek için _ayarlar.scss dosyasında :root içinde tanımlı font-size değerlerini değiştirmeniz yeterlidir.
</p>
<h2>Biçitler</h2>
<p>
  Biçitler, yazıların görünüş biçimleridir. Yazı biçiti veya yalnızca biçit sözcüğüyle anılır. Her işletim örgüsü için deveb'de olabilecek en iyi özellikteki biçiti geriye dönük olarak sunan düzen kuruludur.
</p>