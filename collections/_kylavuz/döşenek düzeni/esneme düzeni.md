---
layout: deveb/kylavuz
title: Esneme Düzeni
permalink: esneme-düzeni
kategori: {alan: "kılavuz", bolum: "Döşenek Düzeni"}
order: 2
---

# Esneme Düzeni - deveb.css

Esneme düzenimiz ile esnek bölmeler oluşturmayı kolaylaştırdık. CSS'ye el sürmeden, bölmelerin ne kadar esneyeceğini HTML'den belirlemeyi ve döşeme işinin nasıl yapılacağını öğrenin. Kullanılışı pek kolay olan **deveb.css**'in esneme düzeni bildiğiniz işittiğiniz sığ yöntemlerden uzaktır. 
{: .girmece}

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
  .örnek .önizleme .kutu{
    width:100%;
    padding: 20px;
    border: 1px solid #f55;
    background-color: #112;
    color: #fff;
  }
</style>

<div class="{1} girmece-örneği">
  <div class="{1}"></div>
  <div class="{6}"></div>
  <div class="{10}"></div>
</div>

Duyarlı nitelikte olan, 0-100 arası değer ile işleyen esneme düzenini ilk kullanışta öğreneceksiniz. HTML’de belirttiğiniz ölçüleri yansıtmak için ikinci bir işlem yapmanıza gerek yok!

Dilediğiniz ende bölmeleri oluşturmaya çok yakınsınız. Hadi başlayalım.

## Esnek Bölme Nasıl Yapılır?

Esneme düzeni, bölme düzenine benzemez. Esneme düzeninde bir değer belirttiğinizde genişliği başka bir öğe ile paylaşıp paylaşmadığına bakılır. Başka bir öğe ile paylaşıyor ise öğenin genişliğine göre esnem ölçüsü bir genişlik belirleyip işler. 0’dan 100’e dek olan sayılar ile esnem değeri oluşturulabilir. “{SAYI}” biçiminde yazılır.

### 1. Örnek

Bir genişlikte iki ayrı bölme oluşturup soldaki bölmeyi sağdaki bölmenin yarı genişliğinde ayarlamak istiyoruz. Bunun için soldaki bölmenin değeri {1}, sağdaki bölmenin değeri {2} olarak ayarlanmalıdır. 
{: .örnek}

<div class="(1/1) örnek">
  <div class="(1/1) önizleme">
    <div class="{1}">
      <div class="kutu">{1}</div>
    </div>
    <div class="{2}">
      <div class="kutu">{2}</div>
    </div>
  </div>
  {% highlight html %}
  <div class="{1}">
    <!-- içerik alanı -->
  </div>
  <div class="{2}">
    <!-- içerik alanı -->
  </div>
  {% endhighlight %}
</div>