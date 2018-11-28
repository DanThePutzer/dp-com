<template>
  <div id="spotlight">
    <div class="article">
      <div class="content">
        <div class="head">
          <div>
            <h1>{{ spotlightData.title }}</h1>
            <h2>{{ spotlightData.subtitle }}</h2>
          </div>
          <h6 class="dansicon" :style="{ color: spotlightData.color }">{{ spotlightData.icon }}</h6>
        </div>

        <div class="flow-text">
          <section class="flow-section" v-for="section in spotlightData.sections">
            <h4>{{ section.number }}</h4>
            <h3>{{ section.title }}</h3>
            <p>{{ section.text }}</p>
          </section>
        </div>
      </div>
      <div class="placeholder">
        <button  v-scroll-to="{
            el: '.container',
            container: '.article',
            duration: 500,
            easing: 'linear',
            offset: -200,
            force: true,
            cancelable: true,
            onStart: false,
            onDone: false,
            onCancel: false,
            x: false,
            y: true
        }">
          <h6 class="dansicon" :style="{ color: spotlightData.color }">j</h6>
          Back To Top
        </button>
      </div>
    </div>
    <div class="sidebar">
      <button @click="closeSpotlight" :style="{ color: spotlightData.color }"><h6 class="dansicon">j</h6></button>

      <div class="social">
        <a href="https://twitter.com/danceladus" target="_blank">d</a>
        <a href="https://github.com/DanThePutzer" target="_blank">f</a>
        <a href="https://www.instagram.com/danbuilds" target="_blank">c</a>
        <a href="https://dribbble.com/danceladus" target="_blank">e</a>
      </div>
    </div>
  </div>
</template>

<script>

import EventBus from '/public/scrpt/bus.js';

export default {
  props: ['spotlightData'],
  data() {
    return {
    }
  },
  methods: {
    closeSpotlight() {
			EventBus.$emit('closeSpotlight');
    }
  }
}
</script>

<style></style>


