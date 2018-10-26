---
layout: default
permalink: 1.0/tr/ogeler/basimcilik
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

<blockquote>
  <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. </p>
  <cite>- Bill Gates</cite>
</blockquote>

<!-- unordered list -->
<ul>
  <li>list item 1</li>
  <li>list item 2
    <ul>
      <li>list item 2.1</li>
      <li>list item 2.2</li>
      <li>list item 2.3</li>
    </ul>
  </li>
  <li>list item 3</li>
</ul>

<!-- description list -->
<dl>
  <dt>description list term</dt>
  <dd>description list description</dd>
</dl>