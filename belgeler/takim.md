---
layout: default
permalink: takim
lang: tr
title: Takım
description: 
---
{% assign github = site.github %}
{% for takim in github.contributors %}
<div>
	<div class="movie_card" id="">
	  <div class="info_section">
	    <div data-gnl="lt" class="movie_header">
	      <img class="locandina" src="{{takim.avatar_url}}" alt="{{ takim.login }}"/>
	      <a href="{{takim.html_url}}">
	      	<h1>{{ takim.login }}</h1>
	      	<h4>Deveb Takımdaşı</h4>
	      </a>
	      <div>
	      	<span class="minutes">{{ takim.id }}</span>
	      </div>
	      <div class="movie_social">
	      <a href="{{takim.html_url}}">
	      	<p class="type">{{ takim.html_url }}</p>
	      </a>
	      </div>	      
	    </div>
	  </div>
	  <div class="blur_back" style="background: url('{{takim.avatar_url}}')"></div>
	</div>	

</div>  
{% endfor %}

<style type="text/css">
.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}

.movie_card {
  position: relative;
  max-width: 800px;
  height: 300px;
  margin: 60px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}
.movie_card:hover {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 100%;

}
.movie_card .info_section .movie_header h1 {
	font-size: 1.8rem;
  color: black;
  font-weight: 400;
}
.movie_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.movie_card .info_section .movie_header .type {
  display: inline-block;
  color: #959595;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  margin-right: 15px;
  height: 100%;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  max-width: 100px;
max-height: 100px;
}


.movie_card .info_section .movie_social {
  min-height: 10%;
  padding-bottom: 20px;
}

.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 100%;
    background-repeat: no-repeat;
	background-position-x: right !important;
  }
}
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position-x: right !important;
    background-position-y: top !important;
    background-repeat: no-repeat;
  }

  .movie_header {
    width: 100%;
    margin-top: 35px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>