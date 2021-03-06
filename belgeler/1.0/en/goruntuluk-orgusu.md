---
layout: default
permalink: 1.0/en/screen-system
lang: en
title: Screen System
description: 
---

<p class="girlik">
  5 different pieces of screen scales are grouped as small screens, mobile screens, tablet screens, laptop screens, desktop screens, tv screens and huge screens.
</p>
<p>
  Today, screen scales and screen resolutions are very diverse. For this reason, adaptive design is a necessity. Small screens will become popular in the near future. <span class="simget">deveb</span> has more screen range than other frameworks.
</p>
<p></p>
<table class="tablo">
  <thead>
    <tr>
      <th>Screens</th>
      <th>
        General <br>
        <i class="fa fa-mobile" aria-hidden="true"></i>
        »
        <i class="fa fa-television" aria-hidden="true"></i>
        <br><span data-metin="olumlu ince">All</span>
      </th>
      <th>
        Small <br>
        <i class="fa fa-tablet" aria-hidden="true"></i>
        <br><span data-metin="olumlu ince">Tablets</span>
      </th>
      <th>
        Medium <br>
        <i class="fa fa-laptop" aria-hidden="true"></i>
        <br><span data-metin="olumlu ince">Laptops</span>
      </th>
      <th>
        Large <br>
        <i class="fa fa-desktop" aria-hidden="true"></i>
        <br><span data-metin="olumlu ince">Desktops</span>
      </th>
      <th>
        x-Large <br>
        <i class="fa fa-television" aria-hidden="true"></i>
        <br><span data-metin="olumlu ince">Televisions</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Units</th>
      <td>data-gnl</td>
      <td>data-sm</td>
      <td>data-md</td>
      <td>data-lg</td>
      <td>data-xl</td>
    </tr>
    <tr>
      <th>Scales</th>
      <td>0 »</td>
      <td>576px »</td>
      <td>768px »</td>
      <td>992px »</td>
      <td>1200px »</td>
    </tr>
    <tr>
      <th>Select Screen</th>
      <td><span data-metin="ana gri">class</span></td>
      <td colspan="3">
        <span data-metin="ana gri">class</span>-smaller<br>
        <span data-metin="ana gri">class</span>-width-smaller<br>
        <span data-metin="ana gri">class</span>-this<br>
        <span data-metin="ana gri">class</span><br>
        <span data-metin="ana gri">class</span>-width-bigger<br>
        <span data-metin="ana gri">class</span>-width-bigger
      </td>
      <td>
        <span data-metin="ana gri">class</span>-smaller<br>
        <span data-metin="ana gri">class</span>-width-smaller<br>
        <span data-metin="ana gri">class</span>-this<br>
        <span data-metin="ana gri">class</span>
      </td>
    </tr>
  </tbody>
</table>

<h3>Display Instructions</h3>

<p>
  <span class="simget">deveb</span> screen system works by default from small to large screens. Optionally, large to small screens or the specified display is affected. For example, if you want to hide an item or area up to the laptop screen, you just need to define data-md = "small-hide". So you'll be hiding from the laptop to the small screens.
</p>

<h4>Usage</h4>
<p>
  The screen system is used as attached to the features of <span class="simget">deveb</span>. For example the grid system. Depending on the situation affecting the display direction may be different.
</p>

<h5>?-width-smaller</h5>
<p>
  Defined screen and smaller screens. For example:
  data-md="hide-width-smaller"
</p>
<h5>?-smaller</h5>
<p>
  Smaller screens from defined screen. For example: data-md="hide-smaller"
</p>
<h5>?-this</h5>
<p>
  Defined screen. For example: data-md="hide-this"
</p>
<h5>?-bigger</h5>
<p>
  Bigger screens from defined screen. For example: data-md="hide-bigger"
</p>
<h5>?-with-bigger</h5>
<p>
  Defined screen and bigger screens. For example:
  data-md="hide-bigger"
</p>