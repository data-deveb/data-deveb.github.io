---
layout: default
permalink: 1.0/tr/bilesenler/sekme-orgusu
lang: tr
title: Sekme Örgüsü
description: 
---


<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<p>
  Deveb, sekme örgüsünü saf CSS yöntemiyle oluşturmaktadır. HTML yapısı ve kullanımı çok basittir. Sekmeleri yatay düzende, dikey düzende kullanabilirsiniz. Ufak bir değiştirge ekleyerek sekmelerin konumlarına ve durumlarına müdahale edebilirsiniz.
</p>

<h2>data-sekme ve Değiştirgeleri</h2>

<p>
  Sekmeler yatay düzende ve dikey düzende kullanabilmek için iki farklı html düzeni bulunur. Değiştirgeleri ise şöyledir; sağda, ortada, altta, gergin, yan. Aşağıdaki data-sekme değiştirgelerini örneklerde kullandık. Gösterilmeyen diğer değerleri yerel çalışmanızda deneyebilirsiniz.
</p>
	{% highlight html %}
  data-sekme data-gnl="t"
  data-sekme data-gnl="s"
  data-sekme data-gnl="araları-aralık"
  data-sekme data-gnl="la"
  data-sekme data-gnl="a"
  data-sekme data-gnl="as"
  data-sekme data-gnl="a araları-aralık"
  data-sekme="dikey"
  data-sekme="dikey" data-gnl="s"
  data-sekme="büzük"
	{% endhighlight %}
<p>
  Not: "yan" değiştirgesi sekmelerin yanda olması için hazırlanan html kaynağında kullanılır. Varsayılan html kaynağı yatay sekmeler oluşturmak içindir.
</p>

<hr>

<h2>Sekme Örnekleri</h2>
<div class="örnek">

  <h3>Önizleme: Düğmeleri Deneyin</h3>

  <script>
    $(document).ready(function(){
      $("#solda").click(function(){       sekme.setAttribute("data-sekme", "solda")});
      $("#solda_altta").click(function(){ sekme.setAttribute("data-sekme", "solda altta")});
      $("#sağda").click(function(){       sekme.setAttribute("data-sekme", "sağda")});
      $("#sağda_altta").click(function(){ sekme.setAttribute("data-sekme", "sağda altta")});
      $("#ortada").click(function(){      sekme.setAttribute("data-sekme", "ortada")});
      $("#ortada_altta").click(function(){sekme.setAttribute("data-sekme", "ortada altta")});
      $("#gergin").click(function(){      sekme.setAttribute("data-sekme", "gergin")});
      $("#gergin_altta").click(function(){sekme.setAttribute("data-sekme", "gergin altta")});
      $("#dikey").click(function(){sekme.setAttribute("data-sekme", "dikey")});
      $("#dikey_sağda").click(function(){sekme.setAttribute("data-sekme", "dikey sağda")});
      $("#büzük").click(function(){sekme.setAttribute("data-sekme", "büzük")});
      $("#ardınca").click(function(){sekme.setAttribute("data-sekme", "ardınca")});
    });
  </script>
  <div>
      <button id="dikey">dikey</button>
      <button id="dikey_sağda">dikey sağda</button>
      <div></div>
      <button id="solda">solda</button>
      <button id="ortada">ortada</button>
      <button id="sağda">sağda</button>
      <button id="gergin">gergin</button>
      <div></div>      
      <button id="solda_altta">solda altta</button> 
      <button id="ortada_altta">ortada altta</button>   
      <button id="sağda_altta">sağda altta</button>    
      <button id="gergin_altta">gergin altta</button>
      <div></div>
      <button id="büzük">büzük</button>
      <button id="ardınca">ardınca</button>
  </div>

  <div id="sekme" data-sekme="">
    <input id="im11" type="radio" name="sekme1" checked="checked">
    <label for="im11">Birinci Sekme</label>
    <div>
      <p>
        İnsanları canlandıran ümit ve güzel hayaldir. Ümidini kaybetmiş olanın, başka kaybedecek şeyi olmaz. Güzel gören güzel düşünür, güzel düşünen hayatından tat alır. Güzel sözler petekten damla damla sızan bala benzer. İstediğini söyleyen, istemediğini işitir.
      </p>
      <p>
        Paranı kaybet, neşeni kaybetme. Ateş düştürü yeri yakar. Sütden ağzı yanan yoğurdu üfürerek yer. Dervişin fikri neyse zikri odur. Akıl akıldan üstündür. Kork Allah'dan korkmayandan, korkma Allah'dan korkandan. Derdini söylemeyen, derman bulamaz. Sakınan göze çöp batar. Kendi düşen ağlamaz. Her koyun kendi bacağından asılır. Kör ile yatan, şaşı ile kalkar. Ateş olmayan yerden, duman çıkmaz.  Yanan kıvılcım, sönük volkanlardan kuvvetlidir. Görünen köt kılavuz istemez. Bakmak ile öğrenilseydi kedi kasap olurdu. Çalışmayan demir paslanır. Namaz müslümanın ışığıdır. Namaza meyli olanın kulağı ezandır. Denize düşen balığa sarılır. Kızını döğmeyen, dizini döver. Söyleyene bakma, söyletene bak. Altın yere düşmekle pul olmaz. Düşmanın eline kılıç verilmez. El kazanı ile aş kaynamaz. Davetsiz gelen döşeksiz oturur. Taş yerinde ağardır. Erken biçen, konan göçer.
      </p>
    </div>
    <input id="im21" type="radio" name="sekme1">
    <label for="im21">İkinci Sekme</label>
    <div>
      <p>
        Boynuz kulağı geçer. Ağaç yaşken eğilir. İstediğini söyleyen, istemediğini işitir. Paranı kaybet, neşeni kaybetme. Ateş düştürü yeri yakar. Sütden ağzı yanan yoğurdu üfürerek yer. Dervişin fikri neyse zikri odur. Akıl akıldan üstündür. Kork Allah'dan korkmayandan, korkma Allah'dan korkandan. Derdini söylemeyen, derman bulamaz. Sakınan göze çöp batar. Kendi düşen ağlamaz. Her koyun kendi bacağından asılır. Kör ile yatan, şaşı ile kalkar. Ateş olmayan yerden, duman çıkmaz.  Yanan kıvılcım, sönük volkanlardan kuvvetlidir. Görünen köt kılavuz istemez. Bakmak ile öğrenilseydi kedi kasap olurdu. Çalışmayan demir paslanır. Namaz müslümanın ışığıdır. Namaza meyli olanın kulağı ezandır.
      </p>
      <p>
        Denize düşen balığa sarılır. Kızını döğmeyen, dizini döver. Söyleyene bakma, söyletene bak. Altın yere düşmekle pul olmaz. Düşmanın eline kılıç verilmez. El kazanı ile aş kaynamaz. Davetsiz gelen döşeksiz oturur. Taş yerinde ağardır. Erken biçen, konan göçer. Borcunu azaldırsan hür yaşarsın, günahını azaltırsan rahat ölürsün.  Yaşı delen suyun kuvveti değil, damlaların sürekliliğidir. Hiçbir mutfak iki kadını alacak kadar geniş değildir. Sevmek keman çalmak gibidir, bilmeyen kötü sesler çıkarır.
      </p>
    </div>
    <input id="im31" type="radio" name="sekme1">
    <label for="im31">Üçüncü Sekme</label>
    <div>
      <p>
        Katırdan olmaz şeker, olsa bile cinsine çeker. Bin ölçüp bir biçmeli. Üzüm üzüme baka baka kararır. Söz söylemeyi öğrenmek, kılıç kullanmayı öğrenmekten zordur. Tek kelime bile karşımızdakinin akıllı mı aptal mı olduğunu gösterir. Biliyorsan konuş alim sansınlar, bilmiyorsan sus insan sansınlar. Soru soranın kişiliği sorusunda gizlidir.
      </p>
      <p>
        Soru kişinin karakterini yansıtır. Cahil ile sohbet etmek güçtür bilene, cahil ne gelirse söyler diline. Adam adamdır olmasa pulu, eşek eşektir altından olsa da çulu. Eşeğe altın semer vurmuşlar, eşek yine eşek. İnsanla kitabın dışına aldanma, içine bak.
      </p>
      <p>
        Söz uçar, yazı kalır. İki gönül bir olduktan sonra samanlık seyran olur. Güzel soru sormakda ilmin yarısıdır. Gerekmezi sakla, gereken güne kadar. Sakla samanı, gelir zamanı. Ölümü hatırlamak insanları kötülükten uzaklaştırır. Ameller niyetlere göredir. Hacının horozu ölmüş, yolcuya ne! Herkes kendi ölüsü için ağlar. El, el için ağlamaz başına kara bağlamaz. Düşüne düşüne görmeli işi. Sonra pişman olmamalı kişi. El elin nesine, gülerek gider yasına. En üstün cihat, zalim sultana karşı söylenen hakikatlerdir.
      </p>
    </div>
    <input id="im41" type="radio" name="sekme1">
    <label for="im41">Dördüncü Sekme</label>
    <div>
      <p>
        Ayağını yorgana göre uzat. Ağaca çıkan keçinin, dala bakan oğlağı olur. Anasına bak kızını al, kenarına bak bezini al. Gülme komşuna, gelir başına. Son gülen iyi güler. Bir musibet, bin nasihattan iyidir. Damlaya damlaya göl olur. Ekmeden biçilmez. Kişi her bildiğini ayağının altına alsa, başı göğe değer. Cahile laf anlatmak, deveye hendek atlatmaktan, köre renk tarif etmekten zordur. Göster bana arkadaşını, söyleyeyim sana kim olduğunu. Her şeyin yol olduğu anda bile, ümit vardır. İnsanları canlandıran ümit ve güzel hayaldir.
      </p>
      <p>
        Ümidini kaybetmiş olanın, başka kaybedecek şeyi olmaz. Güzel gören güzel düşünür, güzel düşünen hayatından tat alır. Güzel sözler petekten damla damla sızan bala benzer. Katırdan olmaz şeker, olsa bile cinsine çeker. Bin ölçüp bir biçmeli. Üzüm üzüme baka baka kararır. Söz söylemeyi öğrenmek, kılıç kullanmayı öğrenmekten zordur. Tek kelime bile karşımızdakinin akıllı mı aptal mı olduğunu gösterir.
      </p>
      <p>
        Biliyorsan konuş alim sansınlar, bilmiyorsan sus insan sansınlar. Soru soranın kişiliği sorusunda gizlidir. Soru kişinin karakterini yansıtır. Cahil ile sohbet etmek güçtür bilene, cahil ne gelirse söyler diline. Adam adamdır olmasa pulu, eşek eşektir altından olsa da çulu.
      </p>
      <p>
        Eşeğe altın semer vurmuşlar, eşek yine eşek. İnsanla kitabın dışına aldanma, içine bak. Söz uçar, yazı kalır. İki gönül bir olduktan sonra samanlık seyran olur. Güzel soru sormakda ilmin yarısıdır. Gerekmezi sakla, gereken güne kadar. Sakla samanı, gelir zamanı. Ölümü hatırlamak insanları kötülükten uzaklaştırır. Ameller niyetlere göredir. Hacının horozu ölmüş, yolcuya ne! Herkes kendi ölüsü için ağlar. El, el için ağlamaz başına kara bağlamaz. Düşüne düşüne görmeli işi. Sonra pişman olmamalı kişi. El elin nesine, gülerek gider yasına. En üstün cihat, zalim sultana karşı söylenen hakikatlerdir. Fazla tatlı olma, yutulursun; fazla acı olma atılırsın. Başkasına muhtaç olmamak için çalışmak da ibadettir. Para efendi değil vasıtadır. Para iyi bir hizmetçi, kötü bir efendidir. Misafir umduğunu değil, bulduğunu yer. Yerinde soru, ilmin anahtarıdır. Kararsızlık ve gecikme, başarısızlığın sebebidir. Bencillik dostluğun zehiridir. Parasını aziz eden kendini rezil eder. Ademoğlunun iki vadi dolusu altını alsaydı, üçüncüsünü isterdi. Bir avuç altının olacağına, bir karış toprağın olsun. Başa gelen çekilir. Akıl akıldan üstündür. Çağrıldığın yere erinme, istenmediğin yerde görünme.
      </p>
      <p>
        Gülü seven dikenine katlanır. Hamama giren terler. Ya olduğun gibi görün ya da göründüğün gibi ol! Aslan yattığı yerden belli olur. Alma mazlumun ahını, çıkar aheste aheste. Kediden post, gavurdan dost olmaz. Biri yer biri bakar kıyamet ondan kopar. Dereyi görmeden paçayı sıvama. Öfkeyle kalkan zararla oturur. Ava giden avlanır. Çivi çiyi söker. Yalancının mumu yatsıya kadar yanar. Boynuz kulağı geçer. Ağaç yaşken eğilir.
      </p>
      <p>
        İstediğini söyleyen, istemediğini işitir. Paranı kaybet, neşeni kaybetme. Ateş düştürü yeri yakar. Sütden ağzı yanan yoğurdu üfürerek yer. Dervişin fikri neyse zikri odur. Akıl akıldan üstündür. Kork Allah'dan korkmayandan, korkma Allah'dan korkandan. Derdini söylemeyen, derman bulamaz. Sakınan göze çöp batar. Kendi düşen ağlamaz. Her koyun kendi bacağından asılır. Kör ile yatan, şaşı ile kalkar. Ateş olmayan yerden, duman çıkmaz.  Yanan kıvılcım, sönük volkanlardan kuvvetlidir. Görünen köt kılavuz istemez. Bakmak ile öğrenilseydi kedi kasap olurdu. Çalışmayan demir paslanır. Namaz müslümanın ışığıdır. Namaza meyli olanın kulağı ezandır. Denize düşen balığa sarılır. Kızını döğmeyen, dizini döver. Söyleyene bakma, söyletene bak. Altın yere düşmekle pul olmaz. Düşmanın eline kılıç verilmez. El kazanı ile aş kaynamaz. Davetsiz gelen döşeksiz oturur. Taş yerinde ağardır. Erken biçen, konan göçer.
      </p>
      <p>
        Borcunu azaldırsan hür yaşarsın, günahını azaltırsan rahat ölürsün.  Yaşı delen suyun kuvveti değil, damlaların sürekliliğidir. Hiçbir mutfak iki kadını alacak kadar geniş değildir. Sevmek keman çalmak gibidir, bilmeyen kötü sesler çıkarır.
      </p>
      <p>
        Sis yelpazeyle dağıtılmaz. Şöhret kabiliyetin gölgesidir. Güzellik, tabiatın kadınlara verdiği ilk hediye, aynı zamanda geri aldığı ilk şeydir. İnsan dışı ile karşılanır, içi ile uğurlanır. Ağaç ne kadar yüksek olursa olsun, yaprakları yine de yere dökülür. Erkek kadınla, kadın altınla, altın ateşle imtihan edilir.
      </p>
    </div>
  </div>
</div>
{% highlight html %}
  <div data-sekme="">
    <input id="im1" type="radio" name="sekme1" checked="checked">
    <label for="im1">Birinci Sekme</label>
    <div>
      <!-- içerik alanı -->
    </div>
    <input id="im2" type="radio" name="sekme1">
    <label for="im2">İkinci Sekme</label>
    <div>
      <!-- içerik alanı -->
    </div>
    <input id="im3" type="radio" name="sekme1">
    <label for="im3">Üçüncü Sekme</label>
    <div>
	  <!-- içerik alanı -->
    </div>
    <input id="im4" type="radio" name="sekme1">
    <label for="im4">Dördüncü Sekme</label>
    <div>
	  <!-- içerik alanı -->
    </div>
  </div>
{% endhighlight %}