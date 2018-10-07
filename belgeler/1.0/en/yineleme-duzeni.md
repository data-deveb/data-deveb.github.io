---
layout: default
permalink: 1.0/en/repeating-layout
lang: en
title: Repeating Layout
description: 
---
<p class="girlik">
    A rhythmic layout has been developed to create repetitive scopes of the same width. If you want to create one-one, two-two, three-three, ... you just need to use the parameter from 1-1 to 24-24.
  </p>
  <div class="örnek">
    <h3>Preview</h3>
    <div class="önizleme">
      <div data-gnl="2-2">
        <div>
          2-2
        </div>
        <div>
          2-2
        </div>
        <div>
          2-2
        </div>
        <div>
          2-2
        </div>
        <div>
          2-2
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="2-2">
      <div>
        2-2
      </div>
      <div>
        2-2
      </div>
      <div>
        2-2
      </div>
      <div>
        2-2
      </div>
      <div>
        2-2
      </div>
    </div>
    {% endhighlight %}
  </div>

  <h2>Use With Piece Layout</h2>
  <p>
    You can use rhythm layout with piece layout. Regular width repeats do not necessarily have to be exactly in line with each other. A good example of what you can do is below.
  </p>
  <div class="örnek">
    <h3>Örnek</h3>
    <div class="önizleme">
      <div data-gnl="4-4">
        <div>
          4-4
        </div>
        <div data-gnl="2 /4">
          2 /4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div>
        4-4
      </div>
      <div data-gnl="2 /4">
        2 /4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
    </div>
    {% endhighlight %}
  </div>

  <h2>Use With Grow Layout</h2>
  <p>
    You can use rhythm layout with grow layout. Regular width repeats do not necessarily have to be exactly in line with each other. A good example of what you can do is below.
  </p>
  <div class="örnek">
    <h3>Preview</h3>
    <div class="önizleme">
      <div data-gnl="4-4">
        <div data-gnl="1 /">
          1 /
        </div>
        <div data-gnl="2 /">
          2 /
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div data-gnl="1 /">
        1 /
      </div>
      <div data-gnl="2 /">
        2 /
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
    </div>
    {% endhighlight %}
  </div>
  <h2>Use With Piece & Grow Layout</h2>
  <p>
    You can use rhythm layout with piece & grow layout. Regular width repeats do not necessarily have to be exactly in line with each other. A good example of what you can do is below.
  </p>
  <div class="örnek">
    <h3>Preview</h3>
    <div class="önizleme">
      <div data-gnl="4-4">
        <div data-gnl="1 /">
          1 /
        </div>
        <div data-gnl="2 /">
          2 /
        </div>
        <div data-gnl="2 /4">
          2 /4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
        <div>
          4-4
        </div>
      </div>
    </div>
    {% highlight html %}
    <div data-gnl="4-4">
      <div data-gnl="1 /">
        1 /
      </div>
      <div data-gnl="2 /">
        2 /
      </div>
      <div data-gnl="2 /4">
        2 /4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
      <div>
        4-4
      </div>
    </div>
    {% endhighlight %}
  </div>