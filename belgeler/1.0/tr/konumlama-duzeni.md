---
layout: default
permalink: 1.0/tr/kesitlik-orgusu/konumlama-duzeni
lang: tr
title: Konumlama Düzeni
description: 
---

<p class="girlik">
    Daha çok konumlama seçeneği kullanın. Sol, orta, sağ, solüst, üst, üstsağ, solalt, alt, altsağ, anaçizgi gibi konumlamalar yapın. Kendiliğinden aralama yapan araları-aralık ve dengeli-aralık özelliğini deneyin.
  </p>

  <h3>Konumlama: l, lt, t, ts, s, as, a, la, o</h3>
  <p>
    İçerikleri herhangi bir yana yerleştirmek için l, lt, t, ts, s, as, a, la, o değiştirgeleri kullanılır. Değiştirgelerin anlamları aşağıdaki önizlemedeki gibidir. Soldan sağa ve üstten alta doğru yazma kuralına göre yanlara en yakın harfler ile isimlendirilmiştir.
  </p>

  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div style="height:300px; border:0px solid red; padding:0; background-color: transparent;">
        <div data-gnl="4 lt">lt: solüst</div>
        <div data-gnl="4 t">t: üst</div>
        <div data-gnl="4 ts">ts: üstsağ</div>
        <div data-gnl="4 l">l: sol</div>
        <div data-gnl="4 o">o: orta</div>
        <div data-gnl="4 s">s: sağ</div>
        <div data-gnl="4 la">la: solalt</div>
        <div data-gnl="4 a">a: alt</div>
        <div data-gnl="4 as">as: altsağ</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div style="height:300px;">
      <div data-gnl="4 lt">lt: solüst</div>
      <div data-gnl="4 t">t: üst</div>
      <div data-gnl="4 ts">ts: üstsağ</div>
      <div data-gnl="4 l">l: sol</div>
      <div data-gnl="4 o">o: orta</div>
      <div data-gnl="4 s">s: sağ</div>
      <div data-gnl="4 la">la: solalt</div>
      <div data-gnl="4 a">a: alt</div>
      <div data-gnl="4 as">as: altsağ</div>
    </div>
  {% endhighlight %}

  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="l">
        <div data-gnl="1 /3">l: sol</div>
      </div>
      <div data-gnl="o">
        <div data-gnl="1 /3">o: orta</div>
      </div>
      <div data-gnl="s">
        <div data-gnl="1 /3">s: sağ</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="l">
      <div data-gnl="1 /3">l: sol</div>
    </div>
    <div data-gnl="o">
      <div data-gnl="1 /3">o: orta</div>
    </div>
    <div data-gnl="s">
      <div data-gnl="1 /3">s: sağ</div>
    </div>
  {% endhighlight %}
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="1 /3 t" style="height:300px;">
        <div>t: üst</div>
      </div>
      <div data-gnl="1 /3 o" style="height:300px;">
        <div>o: orta</div>
      </div>
      <div data-gnl="1 /3 a" style="height:300px;">
        <div>a: alt</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="1 /3 t" style="height:300px;">
      <div>t: üst</div>
    </div>
    <div data-gnl="1 /3 o" style="height:300px;">
      <div>o: orta</div>
    </div>
    <div data-gnl="1 /3 a" style="height:300px;">
      <div>a: alt</div>
    </div>
  {% endhighlight %}

  <h3>Konumlama: _l, _lt, _t, _ts, _s, _as, _a, _la, _o</h3>
  <p>
    Bir ögenin kendisini herhangi bir yana konumlamak için _l, _lt, _t, _ts, _s, _as, _a, _la, _o değiştirgeleri kullanılır. Değiştirgelerin anlamları aşağıdaki gibidir. Soldan sağa ve üstten alta doğru yazma kuralına göre yanlara en yakın harfler hangi yan olduğunu tanımlamaktadır.
  </p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div style="height:150px;">
        <div data-gnl="3 /10 _t">_t: kendisi üst</div>
        <div data-gnl="3 /10 _o">_o: kendisi orta</div>
        <div data-gnl="3 /10 _a">_a: kendisi alt</div>
      </div>
      <div style="height:150px;">
        <div data-gnl="3 /10 _l">_l: kendisi sol</div>
        <div data-gnl="3 /10 _o">_o: kendisi orta</div>
        <div data-gnl="3 /10 _s">_s: kendisi sağ</div>
      </div>
      <div style="height:150px;">
        <div data-gnl="3 /10 _lt">_lt: kendisi solüst</div>
        <div data-gnl="3 /10 _as">_as: kendisi altsağ</div>
      </div>
      <div style="height:150px;">
        <div data-gnl="3 /10 _la">_la: kendisi solalt</div>
        <div data-gnl="3 /10 _ts">_ts: kendisi üstsağ</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div style="height:150px;">
      <div data-gnl="3 /10 _t">_t: kendisi üst</div>
      <div data-gnl="3 /10 _o">_o: kendisi orta</div>
      <div data-gnl="3 /10 _a">_a: kendisi alt</div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _l">_l: kendisi sol</div>
      <div data-gnl="3 /10 _o">_o: kendisi orta</div>
      <div data-gnl="3 /10 _s">_s: kendisi sağ</div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _lt">_lt: kendisi solüst</div>
      <div data-gnl="3 /10 _as">_as: kendisi altsağ</div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _la">_la: kendisi solalt</div>
      <div data-gnl="3 /10 _ts">_ts: kendisi üstsağ</div>
    </div>
  {% endhighlight %}

  <h3>Konumlama: <span data-metin="dikkat">uzat | uzun-ol</span></h3>
  <p>"uzat" sınıfı bir HTML etiketindeki içeriği aşağıdan yukarıya uzatarak gösterir.</p>
  <p>"uzun-ol" sınıfı bir tanımlandığı etiketi içinde bulunduğu etiketin durumuna göre uzatır.</p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="1 /2 uzat" style="height:500px;">
        <div data-gnl="0">
          uzat
        </div>
        <div data-gnl="0">
          uzat
        </div>
        <div data-gnl="0">
          uzat
        </div>
      </div>
      <div data-gnl="1 /2" style="height:500px;">
        <div data-gnl="0 üstte-ol">
          üstte-ol
        </div>
        <div data-gnl="0">
          varsayılan (uzat)
        </div>
        <div data-gnl="0 üstte-ol">
          üstte-ol
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="1 /2 uzat" style="height:500px;">
      <div data-gnl="0">
        uzat
      </div>
      <div data-gnl="0">
        uzat
      </div>
      <div data-gnl="0">
        uzat
      </div>
    </div>
    <div data-gnl="1 /2" style="height:500px;">
      <div data-gnl="0 üstte-ol">
        üstte-ol
      </div>
      <div data-gnl="0">
        varsayılan (uzat)
      </div>
      <div data-gnl="0 üstte-ol">
        üstte-ol
      </div>
    </div>
  {% endhighlight %}
  <p></p>

  <h3>Konumlama: <span data-metin="dikkat">satırda | satırda-ol</span></h3>
  <p>"satırda" sınıfı bir HTML etiketindeki içeriği bir çizgiye dizerek gösterir.</p>
  <p>"satırda-ol" sınıfı bir buldunduğu etiketi bir çizgi konumuna dizerek gösterir.</p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div>
        <div data-gnl="0" style="font-size:2em">
          Varsayılan örnek bir yazı.
        </div>
        <div data-gnl="0">
          Varsayılan örnek bir yazı.
        </div>
      </div>
      <div data-gnl="satırda">
        <div data-gnl="0" style="font-size:2em">
          Örnek bir yazı "satırda".
        </div>
        <div data-gnl="0">
          Örnek bir yazı "satırda".
        </div>
      </div>
      <div>
        <div data-gnl="0 satırda-ol" style="font-size:2em">
          Örnek bir yazı "satırda-ol".
        </div>
        <div data-gnl="0 satırda-ol">
          Örnek bir yazı "satırda-ol".
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div>
      <div data-gnl="0" style="font-size:2em">
        Varsayılan örnek bir yazı.
      </div>
      <div data-gnl="0">
        Varsayılan örnek bir yazı.
      </div>
    </div>
    <div data-gnl="satırda">
      <div data-gnl="0" style="font-size:2em">
        Örnek bir yazı "satırda".
      </div>
      <div data-gnl="0">
        Örnek bir yazı "satırda".
      </div>
    </div>
    <div>
      <div data-gnl="0 satırda-ol" style="font-size:2em">
        Örnek bir yazı "satırda-ol".
      </div>
      <div data-gnl="0 satırda-ol">
        Örnek bir yazı "satırda-ol".
      </div>
    </div>
  {% endhighlight %}
  <p></p>

  <h3>Konumlama: <span data-metin="dikkat">ters-dürme | ters-satır | ters-sütun</span></h3>
  <p>"ters-dürme" sınıfı bir HTML etiketindeki içeriği ters yönde dürerek gösterir.</p>
  <p>"ters-satır" sınıfı bir HTML etiketindeki satırları aynalı olarak gösterir.</p>
  <p>"ters-sütun" sınıfı bir HTML etiketindeki sütunları aynalı olarak gösterir.</p>
  <p></p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="ters-dürme">
        <div data-gnl="1 /3">
          ters-dürme #1
        </div>
        <div data-gnl="1 /3">
          ters-dürme #2
        </div>
        <div data-gnl="1 /3">
          ters-dürme #3
        </div>
        <div data-gnl="1 /3">
          ters-dürme #4
        </div>
        <div data-gnl="1 /3">
          ters-dürme #5
        </div>
        <div data-gnl="1 /3">
          ters-dürme #6
        </div>
      </div>
      <div data-gnl="ters-satır">
        <div data-gnl="1 /3">
          ters-satır #1
        </div>
        <div data-gnl="1 /3">
          ters-satır #2
        </div>
        <div data-gnl="1 /3">
          ters-satır #3
        </div>
        <div data-gnl="1 /3">
          ters-satır #4
        </div>
        <div data-gnl="1 /3">
          ters-satır #5
        </div>
        <div data-gnl="1 /3">
          ters-satır #6
        </div>
      </div>
      <div data-gnl="ters-sütun">
        <div data-gnl="1 /3">
          ters-sütun #1
        </div>
        <div data-gnl="1 /3">
          ters-sütun #2
        </div>
        <div data-gnl="1 /3">
          ters-sütun #3
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="ters-dürme">
      <div data-gnl="1 /3">
        ters-dürme #1
      </div>
      <div data-gnl="1 /3">
        ters-dürme #2
      </div>
      <div data-gnl="1 /3">
        ters-dürme #3
      </div>
      <div data-gnl="1 /3">
        ters-dürme #4
      </div>
      <div data-gnl="1 /3">
        ters-dürme #5
      </div>
      <div data-gnl="1 /3">
        ters-dürme #6
      </div>
    </div>
    <div data-gnl="ters-satır">
      <div data-gnl="1 /3">
        ters-satır #1
      </div>
      <div data-gnl="1 /3">
        ters-satır #2
      </div>
      <div data-gnl="1 /3">
        ters-satır #3
      </div>
      <div data-gnl="1 /3">
        ters-satır #4
      </div>
      <div data-gnl="1 /3">
        ters-satır #5
      </div>
      <div data-gnl="1 /3">
        ters-satır #6
      </div>
    </div>
    <div data-gnl="ters-sütun">
      <div data-gnl="1 /3">
        ters-sütun #1
      </div>
      <div data-gnl="1 /3">
        ters-sütun #2
      </div>
      <div data-gnl="1 /3">
        ters-sütun #3
      </div>
    </div>
  {% endhighlight %}
  <p></p>  