"use strict";

Vue.component('item', {
  props: ['title'],
  template: `
    <li class="item-li">
      <h3 class="item-heading">{{ title }}</h3>
      <slot></slot>
    </li>
    `
});

Vue.component('page-section', {
  props: ['slug', 'title'],
  template: `
  <section class="page-section">
    <hr class="section-hr">
    <h2 class="section-heading"><a :href="'#' + slug" class="section-heading-link">{{ title }}</a></h2>

    <p class="description"><slot name="desc"></slot></p>

    <ul>
      <slot></slot>
    </ul>
  </section>
  `
});

var vm = new Vue({
  el: "#app"
});