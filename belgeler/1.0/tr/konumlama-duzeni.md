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
      <div style="height:300px; padding:0; background-color: transparent;">
        <div data-gnl="4 lt" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">lt: solüst</div>
        </div>
        <div data-gnl="4 t" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">t: üst</div>
        </div>
        <div data-gnl="4 ts" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">ts: üstsağ</div>
        </div>
        <div data-gnl="4 l" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">l: sol</div>
        </div>
        <div data-gnl="4 o" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">o: orta</div>
        </div>
        <div data-gnl="4 s" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">s: sağ</div>
        </div>
        <div data-gnl="4 la" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">la: solalt</div>
        </div>
        <div data-gnl="4 a" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">a: alt</div>
        </div>
        <div data-gnl="4 as" style="border:1px dashed #ddd;">
          <div class="kutu" data-gnl="0">as: altsağ</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div style="height:300px;">
      <div data-gnl="4 lt">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 t">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 ts">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 l">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 o">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 s">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 la">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 a">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="4 as">
        <!-- içerik alanı -->
      </div>
    </div>
  {% endhighlight %}

  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="l" style="border:1px dashed #ddd; margin-bottom:10px">
        <div class="kutu" data-gnl="1 /3">l: sol</div>
      </div>
      <div data-gnl="o" style="border:1px dashed #ddd; margin-bottom:10px">
        <div class="kutu" data-gnl="1 /3">o: orta</div>
      </div>
      <div data-gnl="s" style="border:1px dashed #ddd;">
        <div class="kutu" data-gnl="1 /3">s: sağ</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="l">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="o">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="s">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
  {% endhighlight %}
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="1 /3 t" style="height:300px; border:1px solid #ddd;">
        <div class="kutu" data-gnl="0">t: üst</div>
      </div>
      <div data-gnl="1 /3 o" style="height:300px; border:1px solid #ddd;">
        <div class="kutu" data-gnl="0">o: orta</div>
      </div>
      <div data-gnl="1 /3 a" style="height:300px; border:1px solid #ddd;">
        <div class="kutu" data-gnl="0">a: alt</div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="1 /3 t" style="height:300px;">
        <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /3 o" style="height:300px;">
        <!-- içerik alanı -->
    </div>
    <div data-gnl="1 /3 a" style="height:300px;">
        <!-- içerik alanı -->
    </div>
  {% endhighlight %}

  <h3>Konumlama: _l, _lt, _t, _ts, _s, _as, _a, _la, _o</h3>
  <p>
    Bir ögenin kendisini herhangi bir yana konumlamak için _l, _lt, _t, _ts, _s, _as, _a, _la, _o değiştirgeleri kullanılır. Değiştirgelerin anlamları aşağıdaki gibidir. Soldan sağa ve üstten alta doğru yazma kuralına göre yanlara en yakın harfler hangi yan olduğunu tanımlamaktadır.
  </p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div style="height:150px; border:1px dashed #ddd;">
        <div data-gnl="3 /10 _t">
          <div class="kutu">_t: kendisi üst</div>
        </div>
        <div data-gnl="3 /10 _o">
          <div class="kutu">_o: kendisi orta</div>
        </div>
        <div data-gnl="3 /10 _a">
          <div class="kutu">_a: kendisi alt</div>
        </div>
      </div>
      <div style="height:150px; border:1px dashed #ddd;">
        <div data-gnl="3 /10 _l">
          <div class="kutu">_l: kendisi sol</div>
        </div>
        <div data-gnl="3 /10 _o">
          <div class="kutu">_o: kendisi orta</div>
        </div>
        <div data-gnl="3 /10 _s">
          <div class="kutu">_s: kendisi sağ</div>
        </div>
      </div>
      <div style="height:150px; border:1px dashed #ddd;">
        <div data-gnl="3 /10 _lt">
          <div class="kutu">_lt: kendisi solüst</div>
        </div>
        <div data-gnl="3 /10 _as">
          <div class="kutu">_as: kendisi altsağ</div>
        </div>
      </div>
      <div style="height:150px; border:1px dashed #ddd;">
        <div data-gnl="3 /10 _la">
          <div class="kutu">_la: kendisi solalt</div>
        </div>
        <div data-gnl="3 /10 _ts">
          <div class="kutu">_ts: kendisi üstsağ</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div style="height:150px;">
      <div data-gnl="3 /10 _t">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _o">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _a">
        <!-- içerik alanı -->
      </div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _l">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _o">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _s">
        <!-- içerik alanı -->
      </div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _lt">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _as">
        <!-- içerik alanı -->
      </div>
    </div>
    <div style="height:150px;">
      <div data-gnl="3 /10 _la">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="3 /10 _ts">
        <!-- içerik alanı -->
      </div>
    </div>
  {% endhighlight %}
  <h3>Konumlama: <span data-metin="dikkat">uzat | uzun-ol</span></h3>
  <p>"uzat" sınıfı bir HTML etiketindeki içeriği aşağıdan yukarıya uzatarak gösterir.</p>
  <p>"uzun-ol" sınıfı bir tanımlandığı etiketi içinde bulunduğu etiketin durumuna göre uzatır.</p>
  <div class="örnek">
    <h3>Önizleme</h3>
    <div class="önizleme">
      <div data-gnl="uzat" data-byk="1 /2" style="min-height:300px; border:1px dashed #ddd;">
        <div data-gnl="1 /3">
          <div class="kutu">uzat</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">uzat</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">uzat</div>
        </div>
      </div>
      <div data-gnl="lt" data-byk="1 /2" style="min-height:300px; border:1px dashed #ddd;">
        <div data-gnl="1 /3 _t">
          <div class="kutu">_t</div>
          <div class="kutu">_t</div>
        </div>
        <div data-gnl="1 /3 uzun-ol">
          <div class="kutu">uzun-ol</div>
        </div>
        <div data-gnl="1 /3 _t">
          <div class="kutu">_t</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="uzat" data-byk="1 /2" style="height:300px;">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="lt" data-byk="1 /2" style="height:300px;">
      <div data-gnl="1 /3 _t">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3 uzun-ol">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3 _t">
        <!-- içerik alanı -->
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
          <div class="kutu">Varsayılan örnek bir yazı.</div>
        </div>
        <div data-gnl="0">
          <div class="kutu">Varsayılan örnek bir yazı.</div>
        </div>
      </div>
      <div data-gnl="satırda">
        <div data-gnl="0" style="font-size:2em">
          <div class="kutu">Örnek bir yazı "satırda".</div>
        </div>
        <div data-gnl="0">
          <div class="kutu">Örnek bir yazı "satırda".</div>
        </div>
      </div>
      <div>
        <div data-gnl="0 satırda-ol" style="font-size:2em">
          <div class="kutu">Örnek bir yazı "satırda-ol".</div>
        </div>
        <div data-gnl="0 satırda-ol">
          <div class="kutu">Örnek bir yazı "satırda-ol".</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div>
      <div data-gnl="0" style="font-size:2em">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="0">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="satırda">
      <div data-gnl="0" style="font-size:2em">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="0">
        <!-- içerik alanı -->
      </div>
    </div>
    <div>
      <div data-gnl="0 satırda-ol" style="font-size:2em">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="0 satırda-ol">
        <!-- içerik alanı -->
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
          <div class="kutu">ters-dürme #1</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-dürme #2</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-dürme #3</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-dürme #4</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-dürme #5</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-dürme #6</div>
        </div>
      </div>
      <div data-gnl="ters-satır">
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #1</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #2</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #3</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #4</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #5</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-satır #6</div>
        </div>
      </div>
      <div data-gnl="ters-sütun">
        <div data-gnl="1 /3">
          <div class="kutu">ters-sütun #1</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-sütun #2</div>
        </div>
        <div data-gnl="1 /3">
          <div class="kutu">ters-sütun #3</div>
        </div>
      </div>
    </div>
  </div>
  {% highlight html %}
    <div data-gnl="ters-dürme">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="ters-satır">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
    <div data-gnl="ters-sütun">
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
      <div data-gnl="1 /3">
        <!-- içerik alanı -->
      </div>
    </div>
  {% endhighlight %}
  <p></p>  