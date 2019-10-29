---
layout: default
permalink: 1.0/en/installation
lang: en
title: Installation
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

<p data-gnl>
	<a data-basmal data-gnl="_o 0" class="birincil" 
     href="{{ veri[dil].indir1.url }}">
		{{ veri[dil].indir }}: {{ veri[dil].indir1.dosya }}
	</a>
  <a data-basmal data-gnl="_o 0" class="birincil" 
     href="{{ veri[dil].indir2.url }}">
  	{{ veri[dil].indir }}: {{ veri[dil].indir2.dosya }}
  </a>
</p>

<h2>{{ veri[dil].baslik1 }}</h2>
{% highlight html %}
  <link href="/css/deveb-s1n0/deveb.css" rel="stylesheet">
 
{% endhighlight %}

<h2>{{ veri[dil].baslik2 }}</h2>
{% highlight html %}
  <link href="/css/deveb-s1n0/deveb-en.css" rel="stylesheet">
  
{% endhighlight %}

<p>
{{ veri[dil].yazilik1 }}
</p>