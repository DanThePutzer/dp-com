<template>
  <div id="square" class="tilt" :style="{ color: squareData.color }" :class="'square-' + squareData.class" data-tilt>
    <div>
      <h2>{{ squareData.type }}</h2>
      <h1>{{ squareData.title }}</h1>
      <h3 v-if="squareData.subtitle != ''">{{ squareData.subtitle }}</h3>
    </div>
    <h6 class="dansicon">{{ squareData.icon }}</h6>
    <button v-if="!locked" @click="openSpotlight">{{ squareData.button }} <h6 class="dansicon" :style="{ color: squareData.color }">j</h6></button>
    <button v-if="locked" class="lock">Coming Soon <h6 class="dansicon" :style="{ color: squareData.color }">k</h6></button>
  </div>
</template>

<script>

import EventBus from '/public/scrpt/bus.js';

export default {
  props: ['squareData', 'index'],
  data() {
    return {
      locked: this.squareData.lock,
    }
  },
  methods: {
    openSpotlight() {
			EventBus.$emit('openSpotlight', this.index);
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss"></style>



