<template>
  <div id="design" class="spotlight-content">
    <p>{{ content.text }}</p>
    <img src="/public/res/dribbbleShot.png" alt="">
  </div>
</template>

<script>

/* Importing Data */
import spotlightData from './design.js'

export default {
  data() {
    return {
      content: spotlightData
    }
  },
}
</script>

<style lang="scss">
  @import 'public/style/scss/colors';

  #design {
    p {
      margin: 40px 0px 40px 0px
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
</style>