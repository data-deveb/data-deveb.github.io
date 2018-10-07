---
layout: default
permalink: 1.0/en/grid-system/ordering-layout
lang: en
title: Ordering Layout
description: 
---

<p class="girlik">
    The order feature of the grid system removes items from the spelling order and reorders them among themselves. It is used with "th" unit.
  </p>

  <h3>Order: 1th ~ 24th</h3>
  <p>
    Ordering can be grouped from 1 to 24. When an HTML tag is defined as 1th and 2th, it is sorted among each other. The screen is bound to the braid. For example, you can display the item on the phone screens in the 2th row while you can show it on the wide screen in another row.
  </p>

  <div class="örnek">
    <h3>Preview</h3>
    <div class="önizleme">
      <div data-gnl="2th">
        2th: source code 1th order, view 2th order.
      </div>
      <div data-gnl="1th" data-sm="3th">
        3th: source code 2th order, view 3th order. In mobile, 1th order.
      </div>
      <div data-gnl="1th">
        1th: source code 3th order, view 1th order.
      </div>
    </div>
  </div>

  {% highlight html %}
    <div data-gnl="2th">
      2th: source code 1th order, view 2th order.
    </div>
    <div data-gnl="1th" data-sm="3th">
      3th: source code 2th order, view 3th order. In mobile, 1th order.
    </div>
    <div data-gnl="1th">
      1th: source code 3th order, view 1th order.
    </div>
  {% endhighlight %}