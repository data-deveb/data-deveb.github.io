---
layout: deveb/kylavuz
title: Bölme Düzeni
permalink: bölme-düzeni
kategori: {alan: "kılavuz", bolum: "Döşenek Düzeni"}
order: 2
---

# Bölme Düzeni

Türlü genişlikte bölmeler oluşturmayı **bölme düzeni** ile kolaylaştırdık. HTML satırlarınızı yazıyorken CSS'ye el sürmeden bir bölme oluşturmayı ve bu bölme için genişlik belirtmeyi öğrenmeniz için kılavuz yazdık. Pek kolay kullanılabilen **[deveb.css](https://data-deveb.github.io)**'in bölme düzeni, ağ tasarımcısı olan kişileri belli ölçüler ile kısıtlamadan özgür kılar.


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
  .örnek .önizleme > div::before{
    content: attr(class);
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

### 1. Örnek
Bir genişlikte iki ayrı bölme oluşturup soldaki bölmeyi sağdaki bölmenin yarı genişliğinde ayarlamak istiyoruz. Bunun için soldaki bölmenin değeri (1/3), sağdaki bölmenin değeri (2/3) olarak ayarlanmalıdır. Paydası 12 olan bir değer kullanmak istenmiş ise soldaki bölmenin değerini (4/12), sağdaki bölmenin değerini (8/12) olarak yazabiliriz. 
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="(1/3)">    </div>
    <div class="(2/3)">    </div>
    <div class="(4/12)">    </div>
    <div class="(8/12)">    </div>
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

Bölmeler oluşturmak amacı ile değerler yazdığınızda ağ tarayıcılarına özetle şöyle demiş oluruz: *"Yer alınmış genişliği payda ölçüsünde eşit bölmüş ol. Bölme genişliğini bu paydada belirtilen pay ölçüsüne göre düz."*

Böylece **(SAYI/SAYI)** ile oranlı bölmeler var edip dilediğimiz döşeneği oluşturabiliriz. Yeni bir bölme oluşturduğumuzda genişlik satırında boş bir yere sığan bir bölme değil ise alta kaydırılıp derilecektir.


### 2. Örnek

Bir genişliğin yarısı kadar genişliği olan öğeler oluşturalım. Her öğenin değerlerini birbirine eşit olmayan pay paydalar ile yazalım. Sırası ile **"(1/2)"**, **"(2/4)"**, **"(3/6)"**, **"(4/8)"**, **"(5/10)"** ve **"(6/12)"** değerlerini kullanalım.
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="(1/2)">
    </div>
    <div class="(2/4)">
    </div>
    <div class="(3/6)">
    </div>
    <div class="(4/8)">
    </div>
    <div class="(5/10)">
    </div>
    <div class="(6/12)">
    </div>
  </div>
  {% highlight html %}
  <div class="(1/2)">
    <!-- içerik alanı -->
  </div>
  <div class="(2/4)">
    <!-- içerik alanı -->
  </div>
  <div class="(3/6)">
    <!-- içerik alanı -->
  </div>
  <div class="(4/8)">
    <!-- içerik alanı -->
  </div>
  <div class="(5/10)">
    <!-- içerik alanı -->
  </div>
  <div class="(6/12)">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

### 3. Örnek

Bölme düzenini kullanmayı biraz daha iyi anlamak için başka bir örnek yapalım. Bir tasarımda birbirine eşit olmayan genişliği olan 3 bölme oluşturacağız. Bu kez 30luk bir bölme düzeni kurmak istiyoruz. Değerlerimiz şöyle yazabiliriz: **"(6/30)"**, **"(15/30)"**, **"(9/30)"**.
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="(6/30)">
    </div>
    <div class="(15/30)">
    </div>
    <div class="(9/30)">
    </div>
  </div>
  {% highlight html %}
  <div class="(6/30)">
    <!-- içerik alanı -->
  </div>
  <div class="(15/30)">
    <!-- içerik alanı -->
  </div>
  <div class="(9/30)">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>

## Bölme Düzeni İle Esneme Düzeni Bir Arada

Esneme düzeninde her bir öğe birbirinden etkilenir. Bölme düzeninde her bir öğenin belirtilen oranda eni olur. 

Esnetme düzeninde yanları içten öteleme ölçüleri sayıştan sayılmaz. Size bir örnek gösterelim. Göreceğiniz üzere birbirleriyle eşit genişlikte olmuyorlar. Bunlarla birlikte esnetme düzeni bulunduğu yerdeki kapların sayısı arttırkça aynı yerde esnemeye devam ederler.

### 1. Örnek

Temel bir örnek ile bir genişlikte **(1/3)** ölçüsünde bir öğe ile **{1}** esnem ölçüsünde bir öğe oluşturalım ve genişliği dolduruşunu görelim.
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="(1/3)">
    </div>
    <div class="{1}">
    </div>
  </div>    
  {% highlight html %}
  <div class="(1/3)">
    <!-- içerik alanı -->
  </div>
  <div class="{1}">
    <!-- içerik alanı -->
  </div>
 
  {% endhighlight %}
</div>
