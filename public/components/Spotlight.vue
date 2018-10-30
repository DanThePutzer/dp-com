<template>
  <div id="spotlight">
    <div class="article">
      <div class="content"></div>
      <div class="placeholder"></div>
    </div>
    <div class="sidebar">
      <button @click="closeSpotlight"><h6 class="dansicon">j</h6></button>

      <div class="social">
        <a href="">e</a>
        <a href="">d</a>
        <a href="">f</a>
        <a href="">c</a>
      </div>
    </div>
  </div>
</template>

<script>

import EventBus from '/public/scrpt/bus.js'

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


