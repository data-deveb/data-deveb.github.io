---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/siralama-duzeni
lang: tr
title: Sıralama Düzeni
description: 
---
<p class="girlik">
  Kesitlik örgüsünün sıralama özelliği ögeleri yazım düzeni sırasından kopararak kendi aralarında yeniden sıralandırmaya yarar. "inci, ıncı, uncu, üncü" anlamına gelen nc birimiyle kullanılır.
</p>

<h3>Sıralama: 1nc ~ 24nc</h3>
<p>
  Sıralama işlemi 1'den 24'e kadar aralığı barındırır. Bir HTML etiketine 1nc ve 2nc tanımlaması yaptığınızda birbirleri arasında sıralama yapılır. Görüntülük örgüsüyle uyumludur. Örneğin telefon görüntülüklerinde bir ögeyi ikinci sırada gösterebilirken geniş ekranlarda başka bir sırada gösterebilirsiniz.
</p>

<div class="örnek">
  <h3>Önizleme</h3>
  <div class="önizleme">
    <div data-gnl="2nc">
      <div class="kutu">2nc: kaynağında birinci sırada, görüntülükte ikinci sırada.</div>
    </div>
    <div data-gnl="3nc">
      <div class="kutu">3nc: kaynağında ikinci sırada, görüntülükte üçüncü sırada. Telefon görüntülüklerinde ise birinci sırada.</div>
    </div>
    <div data-gnl="1nc">
      <div class="kutu">1nc: kaynağında üçüncü sırada, görüntülükte birinci sırada.</div>
    </div>
  </div>
</div>
{% highlight html %}
    <div data-gnl="2nc">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3nc">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1nc">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}