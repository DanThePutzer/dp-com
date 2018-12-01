<template>
  <div id="dropseed" class="spotlight-content">
    <section v-for="section in sections">
      <h4>{{ section.number }}</h4>
      <h3 :class="{ feature: section.feature }">{{ section.title }}</h3>
      <p>{{ section.text }}</p>

      <div v-if="section.image == 1" class="flow-image">
        <img src="/public/res/DropSeed/img1.png">
        <h2><span>Main Screen: </span>A first look at the main screen with side and top bar showing the Note Overview.</h2>
      </div>

      <div v-if="section.image == 2" class="flow-image">
        <img src="/public/res/DropSeed/img2.png">
        <h2><span>Activity Screen: </span>Offering an overview of what has been going on lately as well as some metrics for the day.</h2>
      </div>

      <div v-if="section.image == 3" class="flow-image">
        <img src="/public/res/DropSeed/img3.png">
        <h2><span>Tasks Screen: </span>Create lists to organize tasks and claim tasks to show people what you're currently working on</h2>
      </div>

      <div v-if="section.image == 4" class="flow-image">
        <img src="/public/res/DropSeed/img4.png">
        <h2><span>Note Grid: </span>The grid offers a unique and flexible way to store and arrange information.</h2>
      </div>

      <div v-if="section.image == 5" class="flow-image">
        <img src="/public/res/DropSeed/img5.png">
        <h2><span>Tree Overview: </span>The tree overview gives you a grid with all your trees and a small preview showing the structure of a tree.</h2>
      </div>

      <div v-if="section.image == 6" class="flow-image">
        <img src="/public/res/DropSeed/img6.png">
        <h2><span>Tree Editor: </span>A look at what the tree concept looks like within DropSeed.</h2>
      </div>

      <div v-if="section.image == 7" class="flow-image">
        <img src="/public/res/DropSeed/img7.png">
        <h2><span>Thread View: </span>Communicate and share ideas, thoughts, notes, files etc. within DropSeed without having to download things over and over again.</h2>
      </div>

      <div v-if="section.image == 8" class="flow-image">
        <img src="/public/res/DropSeed/img8.png">
        <h2><span>Global Search: </span>Search the entire idea and preview elements without leaving your currently active tab</h2>
      </div>
    </section>
  </div>
</template>

<script>

/* Importing Data */
import spotlightData from './dropseed.js'

export default {
  data() {
    return {
      sections: spotlightData
    }
  }
}
</script>

<style lang="scss">
  @import 'public/style/scss/colors';

  #dropseed {
    width: 100%;

    .feature {
      display: flex;
      align-items: center;

      &::before {
        content: "";
        position: relative;
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $dropseedBlue;
        margin: 0px 12px 0px -20px;
      }
    }

    section {
      margin: 40px 0px 20px 0px;

      &:first-of-type {
        margin-top: 50px;
      }
    }
  }

@media screen and (max-width: 800px) {

  #dropseed {

    .feature {

      &::before {
        width: 6px;
        height: 6px;
        margin: 0px 8px 0px -14px;
      }
    }

    section {
      margin: 25px 0px 10px 0px;
    }
  }
}
</style>


