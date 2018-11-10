---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/esnetme-duzeni
lang: tr
title: Esnetme Düzeni
description: 
---
<p class="girlik">
	Görüntülük örgüsüyle kullanılarak görüntülüklere göre uyarlanabilen, 1'den 24'e kadar esnetme dengesi kurulabilen, durumuna göre daralıp genişleyebilen, bölümleme düzeniyle eşik ve aşık genişliği tanıyarak esneyebilen, güçlü kap örgüsü düzenimizi kullanın.
</p>

<h3>Kullanımı</h3>
<p>
	Ögeleri kolaylıkla esneterek çeşitli genişliklere bürüyebilirsiniz. Aynı yerde bulunan öğeler genişliklerine bürünürken birbirlerini sayarlar. Esnetme düzeni bu yetisini "CSS ESNEK" özelliğinden alır. Anlaşılır ve kolay üç ayrı esnetme düzeni özelliği ile tasarımlarınızı kolaylıklar ilerletebileceksiniz. Söz ettiğimiz üç özellik olan esnetme, eşik esnetme, aşık esnetme şöyle;
</p>
<h4>Esnetme:</h4>
<p>
	Her öğeyi birbiriyle etkileştirip birbirlerinin katları olarak esneyen genişlik tanımlayabileceğiniz özelliktir. Bölümleme düzeniyle birlikte kullanılmaz. Kullanımı "<b>SAYI /</b>" söz dizimiyle yapılır. 
</p>
<p class="örnek">
	Genişliği ikiye ayırıp sol öğenin sağ öğeden iki kat daha geniş olmasını istiyoruz diyelim. Bu biçimi elde etmek için ilk öğeyi data-gnl="2 /", ikinci öğeyi data-gnl="1 /" olarak tanımlarız.
</p>
<div class="örnek">
	<div class="önizleme">
    <div data-gnl="2 /">
    	<div class="kutu">2 /</div>
		</div>
		<div data-gnl="1 /">
			<div class="kutu">1 /</div>
		</div>
	</div>
</div>
{% highlight html %}
    <div data-gnl="2 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}
<p class="örnek">
	Bir önceki örnekte ikiye ayırmak yetmedi diyelim. Bölümleri üçe ayırmamız gerekiyor diyelim. En sağdaki bölümle en soldaki bölüm birbirine eşit olacak biçimde yapıp, ortadaki bölüm ise bunların 2 katı olarak kalacak biçimde ayarlayalım. Bunu yalnızca yeni bir div etiketi ekleyerek nasıl yaptığımızı önceki örnekle iyice karşılaştırırsanız kendinizi esnetme düzenini anlamış sayabilirsiniz.
</p>
<div class="örnek">
	<div class="önizleme">
		<div data-gnl="1 /">
			<div class="kutu">1 / (yeni bölüm)</div>
		</div>
		<div data-gnl="2 /">
			<div class="kutu">2 /</div>
		</div>
		<div data-gnl="1 /">
			<div class="kutu">1 /</div>
		</div>
	</div>
</div>
{% highlight html %}
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="2 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}

<h4>Eşik Esnetme:</h4>
<p>
	Her öğeyi eşik genişlikten daha düşük genişliğe esnemesini engeller. Ancak genişleme yönünde esneyebilir. Kullanımı "<b>SAYI %</b>" söz dizimiyle yapılır. Bu yöntem bölümleme düzeniyle birlikte çalıştığı için varsayılan bölümlük değeri olan "/12" gizli özne gibi etkindir. Bu nedenle eğer ayrı bir bölümleme düzeni kullanmak isterseniz kullanımı şöyle yapmanız gerekir: "<b>SAYI % /SAYI</b>"
</p>
<p class="örnek">
	Bir genişliğe dört bölümü belirli bir sırada oluşturmak istiyoruz. Ancak birinci bölüm eşik olarak 1/12 ölçüsünde diğer üç bölümde eşik olarak 3/6 ölçüsünde genişlemelidir. Ve birbirleri arasındaki denge bu ölçülerle orantılı olmalıdır. Bulundukları genişlikte bu ölçüler koşuluna uyarak en iyi biçimde esnemelerini şöyle yaparız;
</p>
<div class="örnek">
<div class="önizleme">
  <div data-gnl="1 %">
    <div class="kutu">1 %</div>
  </div>
  <div data-gnl="3 % /6">
    <div class="kutu">3 % /6</div>
  </div>
  <div data-gnl="3 % /6">
    <div class="kutu">3 % /6</div>
  </div>
  <div data-gnl="3 % /6">
    <div class="kutu">3 % /6</div>
  </div>
</div>
</div>
{% highlight html %}
    <div data-gnl="1 %">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 % /6">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 % /6">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 % /6">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}
<h4>Aşık Esnetme:</h4>
<p>
  Her öğeyi aşık genişlikten daha yüksek genişliğe esnemesini engeller. Ancak daralma yönünde esneyebilir. Kullanımı "<b>SAYI &</b>" söz dizimiyle yapılır. Bu yöntem bölümleme düzeniyle birlikte çalıştığı için varsayılan bölümlük değeri olan "/12" gizli özne gibi etkindir. Bu nedenle eğer ayrı bir bölümleme düzeni kullanmak isterseniz kullanımı şöyle yapmanız gerekir: "<b>SAYI & /SAYI</b>"
</p>
<p class="örnek">
  Bir genişliğe dört bölümü belirli bir sırada oluşturmak istiyoruz. Ancak birinci bölüm aşık olarak 1/12 ölçüsünde diğer üç bölümde aşık olarak 3/6 ölçüsünde genişlemelidir. Ve birbirleri arasındaki denge bu ölçülerle orantılı olmalıdır. Bulundukları genişlikte bu ölçüler koşuluna uyarak en iyi biçimde esnemelerini şöyle yaparız;
</p>
<div class="örnek">
<div class="önizleme">
  <div data-gnl="1 &">
    <div class="kutu">1 &</div>
  </div>
  <div data-gnl="3 & /6">
    <div class="kutu">3 & /6</div>
  </div>
  <div data-gnl="3 & /6">
    <div class="kutu">3 & /6</div>
  </div>
  <div data-gnl="3 & /6">
    <div class="kutu">3 & /6</div>
  </div>
</div>
</div>
{% highlight html %}
    <div data-gnl="1 &">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 & /6">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 & /6">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="3 & /6">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}
<p>
  "<b>SAYI /</b>", "<b>SAYI % /SAYI</b>", "<b>SAYI & /SAYI</b>" değiştirgeleri görüntülük örgüsüyle birlikte kullanıldığı için görüntülük özniteliklerinin değiştirgesi olarak tanımlıdır. Günümüzün gözde kullanımlarından olan esnetme düzeniyle ilgili kök bilgileri bitirdiniz.
</p>

<h3>Esnetilen Öğeleri Alta Kaydırma</h3> 
<p>
  Esnetme düzeninde tanımlanan bölümler kendi aralarında genişlik ölçülerine bürünüyorlar demiştik. Ancak öğeler çoğaldıkça oluşturulan bölümler gittikçe daha küçük genişlikte olacaktır. Yeni öğelerin alttan devam etmesini sağlamak için <b>yalın div etiketi</b> tanımlamanız yeterlidir.
</p>

<div class="örnek">
<div class="önizleme">
  <div data-gnl="2 /">
    <div class="kutu">2 /</div>
  </div>
  <div data-gnl="1 /">
    <div class="kutu">1 /</div>
  </div>
  <div></div>
  <div data-gnl="2 /">
    <div class="kutu">2 /</div>
  </div>
  <div data-gnl="1 /">
    <div class="kutu">1 /</div>
  </div>
</div>
</div>
{% highlight html %}
    <div data-gnl="2 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
    <div></div>
    <div data-gnl="2 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}

<h3>Bölümleme Düzeni + Esnetme Düzeni + Katı Genişlik</h3> 

<p>
  Esnetme düzeni dilendiğinde bölümleme düzeniyle bir arada kullanılabilir. Buradan anlaşılacağı gibi katı genişliklerle de kullanılabilir.
</p>
<p class="örnek">
  Bir genişliğe dört bölümü belirli bir sırada oluşturmak istiyoruz. Ancak birinci bölüm 400 benek genişliğinde, ikinci bölüm 1 esnetme ve dördüncü de 2 katı esnetme olup son olarak üçün bölüm de 2/12 bölümleme ölçüsünde olacaktır. 
</p>
<div class="örnek">
<div class="önizleme">
  <div style="width:400px;">
    <div class="kutu">400 benek</div>
  </div>
  <div data-gnl="1 /">
    <div class="kutu">1 /</div>
  </div>
  <div data-gnl="2">
    <div class="kutu">2</div>
  </div>
  <div data-gnl="1 /">
    <div class="kutu">1 /</div>
  </div>
</div>
</div>
{% highlight html %}
    <div style="width:400px;">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="2">
      <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /">
      <!-- içerik alanı -->
    </div>
{% endhighlight %}


<h3>Esnetme ve Bölümleme Arasındaki Ayrım</h3>
<p>
  Esnetme düzeniyle bölümleme düzeni her durumda aynı genişlikte olmazlar. Çünkü esnetme düzeninde öğenin yanlarından verilen iç boşluklar, bölümleme düzenine göre genişlik ölçüsünü etkiler. Yani birebir aynı genişliklerde olmazlar. Bu ayrımı şöyle gösterebiliriz;
</p>
<div class="örnek">
<div class="önizleme">
<div style="border:0px solid red; padding:0;">
  <div data-gnl="1 /">
    <div class="kutu">1 /</div>
  </div>
  <div data-gnl="4 /">
    <div class="kutu">4 /</div>
  </div>
  <div data-gnl="2 /">
    <div class="kutu">2 /</div>
  </div>
</div>
<div style="border:0px solid red; padding:0;">
  <div data-gnl="1 /7">
    <div class="kutu">1 /7</div>
  </div>
  <div data-gnl="4 /7">
    <div class="kutu">4 /7</div>
  </div>
  <div data-gnl="2 /7">
    <div class="kutu">2 /7</div>
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