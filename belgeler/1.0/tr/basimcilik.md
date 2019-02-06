---
layout: default
permalink: 1.0/tr/icerik/basimcilik
lang: tr
title: Basımcılık
description: 
---

<p class="girlik">
  Başlıklar, paragraflar, düz yazılar, liste öğeleri gibi yazıya dayalı olan her türlü ögeler için basımcılık ayarları.
</p>
<h2>Genel Ayarlar</h2>
<p>
  Yazılar varsayılan değere göre boyutlarını kazanırlar. Yazı boyutu geniş görüntülükler için 16 benek olarak ayarlıyken, dar görüntülükler için 14 benek olarak ayarlanmıştır. İsteğe bağlı olarak bu değerler değiştirilebilir. Tüm yazılar bu değerlere göre ölçeklenecektir. Eğer dış css dosyalarında doğrudan bir ölçü tanımlarsanız bu ölçüler etki dışında kalır. Ayarları değiştirmek için _ayarlar.scss dosyasında :root içinde tanımlı font-size değerlerini değiştirmeniz yeterlidir.
</p>
<h2>Biçitler</h2>
<p>
  Biçitler, yazıların görünüş biçimleridir. Yazı biçiti veya yalnızca biçit sözcüğüyle anılır. Her işletim örgüsü için deveb'de olabilecek en iyi özellikteki biçiti geriye dönük olarak sunan düzen kuruludur.
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
<h2>Yazmıklar</h2>
<div class="örnek">
<div class="önizleme">
  <p>
    Yazmık, bir yazının bir başından öteki başına kadar olan bölümüne denir. Daha ayrıntılı bir anlatımla yazmık bir duyguyu, bir düşünceyi, bir isteği, bir öneriyi, bir olayı yalnızca bir yönüyle anlatmaya yarayan yazı türüdür.
  </p>
</div>
</div>
{% highlight html %}
    <p>
      Yazmık, bir yazının bir başından öteki başına kadar olan bölümüne denir. Daha ayrıntılı bir anlatımla yazmık bir duyguyu, bir düşünceyi, bir isteği, bir öneriyi, bir olayı yalnızca bir yönüyle anlatmaya yarayan yazı türüdür.
    </p>
{% endhighlight %}

<br>
<div class="örnek">
<div class="önizleme">
  <p>Yazıyı <mark>vurgulama</mark>k için im etiketini &#60;mark&#62; kullanabilirsiniz.</p>
  <p><del>Bir dizedeki yazıyı silinmiş olarak belirtmek için sil etiketini kullanabilirsiniz.</del></p>
  <p><s>Artık doğru olduğu düşünülmeyen yazıyı belli etmek için kullanılır.</s></p>
  <p><ins>Bu yazıya vurgulama belgeye ek olarak eklendiği belli olması amacıyla yapılmıştır.</ins></p>
  <p><u>Bu yazıya vurgulama altı çizili olarak yapılmıştır.</u></p>
  <p><small>Bu yazıya vurgulama küçük olarak yapılmıştır.</small></p>
  <p><strong>Bu yazıya vurgulama kalın olarak yapılmıştır.</strong></p>
  <p><em>Bu yazıya vurgulama eğik olarak yapılmıştır.</em></p>
</div>
</div>
{% highlight html %}
    <p>Yazıyı <mark>vurgulama</mark>k için im etiketini kullanabilirsiniz.</p>
    <p><del>Bir dizedeki yazıyı silinmiş olarak belirtmek için sil etiketini kullanabilirsiniz.</del></p>
    <p><s>Artık doğru olduğu düşünülmeyen yazıyı belli etmek için kullanılır.</s></p>
    <p><ins>Bu yazıya vurgulama belgeye ek olarak eklendiği belli olması amacıyla yapılmıştır.</ins></p>
    <p><u>Bu yazıya vurgulama altı çizili olarak yapılmıştır.</u></p>
    <p><small>Bu yazıya vurgulama küçük olarak yapılmıştır.</small></p>
    <p><strong>Bu yazıya vurgulama kalın olarak yapılmıştır.</strong></p>
    <p><em>Bu yazıya vurgulama eğik olarak yapılmıştır.</em></p>
{% endhighlight %}

<br>
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
      <cite>- Oktay Sinanoğlu</cite>
    </blockquote>
{% endhighlight %}