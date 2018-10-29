<template>
  <div id="square" class="tilt" :style="{ color: squareData.color }" :class="'square-' + squareData.class" data-tilt>
    <div>
      <h2>{{ squareData.type }}</h2>
      <h1>{{ squareData.title }}</h1>
      <h3 v-if="squareData.subtitle != ''">{{ squareData.subtitle }}</h3>
    </div>
    <h6 class="dansicon">{{ squareData.icon }}</h6>
    <button>{{ squareData.button }} <h6 class="dansicon" :style="{ color: squareData.color }">j</h6></button>
  </div>
</template>

<script>

export default {
  props: ['squareData'],
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss"></style>



