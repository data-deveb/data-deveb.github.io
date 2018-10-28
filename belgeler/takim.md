---
layout: default
permalink: takim
lang: tr
title: Takım
description: 
---
{% assign github = site.github %}

{% for takim in github.contributors %}
<div class="takımdaş-deriti">
  <div class="bilgi-alanı">
    <div data-gnl="lt" class="bilgi-başı">
      <img class="locandina" src="{{takim.avatar_url}}" alt="{{ takim.login }}"/>
      <a href="{{takim.html_url}}">
      	<h1>{{ takim.login }}</h1>
      	<h4>Deveb Takımdaşı</h4>
      </a>
      <div>
      	<span class="benzersiz">{{ takim.id }}</span>
      </div>
      <div class="alt-alan">
      <a href="{{takim.html_url}}">
      	<p class="type">{{ takim.html_url }}</p>
      </a>
      </div>	      
    </div>
  </div>
  <div class="alt-deri" style="background: url('{{takim.avatar_url}}')"></div>
</div>
{% endfor %}

<style type="text/css">
.takımdaş-deriti {
	position: relative;
  max-width: 800px;
  height: 250px;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}
.takımdaş-deriti:hover {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.takımdaş-deriti .bilgi-alanı {
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı {
  position: relative;
  padding: 25px;
  height: 100%;
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı h1 {
	font-size: 1.8rem;
  color: #2c2171;
  font-weight: 400;
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı h4 {
  color: #555;
  font-weight: 400;
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı .benzersiz {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı .type {
  display: inline-block;
  color: #959595;
}
.takımdaş-deriti .bilgi-alanı .bilgi-başı .locandina {
  position: relative;
  margin-right: 15px;
  height: 100%;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  max-width: 100px;
max-height: 100px;
}


.takımdaş-deriti .bilgi-alanı .alt-alan {
  min-height: 10%;
  padding-bottom: 20px;
}

.takımdaş-deriti .alt-deri {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}


  .bilgi-alanı {
    background: linear-gradient(to right, #ffffff 75%, transparent 120%);
  }

  .alt-deri {
    width: 100%;
    background-repeat: no-repeat !important;
	background-position-x: right !important;
	background-position:center right fixed; 
	  -webkit-background-size: cover;
	  -moz-background-size: cover;
	  -o-background-size: cover;
	  background-size: cover;
	  background-size: auto 100% !important;
  }

</style>
