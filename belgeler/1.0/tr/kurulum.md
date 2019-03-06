---
layout: default
permalink: 1.0/tr/kurulum
lang: tr
title: Kurulum
description: 
---

{% assign veri = site.data.s1n0.kurulum %}
{% assign dil = page.lang %}

<style type="text/css">
  [data-basmal].birincil{
    border:1px solid purple; padding:10px;
  }
</style>

<p class="girlik"> 
	{{ veri[dil].giris }}
</p>

<p>
	<!--<a data-basmal data-gnl="_o 0" class="birincil" 
     href="{{ veri[dil].indir1.url }}">
		{{ veri[dil].indir }}: {{ veri[dil].indir1.dosya }}
	</a>-->
  <a data-basmal data-gnl="_o 0" class="birincil" 
     href="{{ veri[dil].indir2.url }}">
  	{{ veri[dil].indir }}: {{ veri[dil].indir2.dosya }}
  </a>
</p>
<br>

<h2>{{ veri[dil].baslik1 }}</h2>
{% highlight html %}
  <link href="/css/deveb-s1n0/deveb.css" rel="stylesheet">

{% endhighlight %}
<br>
<h2>{{ veri[dil].baslik2 }}</h2>
{% highlight html %}
  <link href="/css/deveb-s1n0/deveb-en.css" rel="stylesheet">
  
{% endhighlight %}

<p>
{{ veri[dil].yazilik1 }}
</p>

<h1>Tarayıcılara Uyum</h1>

Günümüz koşullarında kimi tarayıcıların sunduğu özellikler eskidi. Bu koşullar altında Internet Explorer kullanım oranı 5%'lere dek gerilemesi nedeniyle bu tarayıcıya uyum sağlayıcı çalışmaları bırakmış bulunuyoruz. Bunların dışında olan tüm tarayıcılara uyumlu özelliklerdeyiz. Kullanılan işletim örgüsünde barındırılabilen her uyumlu tarayıda deveb sağlıklı çalışacaktır.



<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-t7us{background-color:#efefef;color:#9b9b9b;border-color:#c0c0c0;text-align:left;vertical-align:top}
.tg .tg-iwjk{font-weight:bold;background-color:#dae8fc;border-color:#c0c0c0;text-align:left;vertical-align:top}
.tg .tg-4hvh{background-color:#ffce93;color:#f56b00;border-color:#c0c0c0;text-align:left;vertical-align:top}
.tg .tg-19wx{background-color:#9aff99;color:#009901;border-color:#c0c0c0;text-align:left;vertical-align:top}
.tg .tg-bk4l{background-color:#ffccc9;color:#fe0000;border-color:#c0c0c0;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-iwjk"></th>
    <th class="tg-iwjk">Chrome</th>
    <th class="tg-iwjk">Firefox</th>
    <th class="tg-iwjk">Internet Explorer</th>
    <th class="tg-iwjk">Microsoft Edge</th>
    <th class="tg-iwjk">Opera</th>
    <th class="tg-iwjk">Safari</th>
    <th class="tg-iwjk">Diğer</th>
  </tr>
  <tr>
    <td class="tg-iwjk">Mac</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
  </tr>
  <tr>
    <td class="tg-iwjk">Linux</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
  </tr>
  <tr>
    <td class="tg-iwjk">Windows</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-bk4l">Karşılamaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
    <td class="tg-4hvh">?</td>
  </tr>
  <tr>
    <td class="tg-iwjk">Android</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
  </tr>
  <tr>
    <td class="tg-iwjk">iOS</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-4hvh">?</td>
  </tr>
  <tr>
    <td class="tg-iwjk">WMP</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-19wx">Karşılar</td>
    <td class="tg-4hvh">?</td>
    <td class="tg-t7us">Barınmaz</td>
    <td class="tg-4hvh">?</td>
  </tr>
</table>


