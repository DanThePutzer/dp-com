<template>
  <div id="spotlight">
    <div class="article">
      <div class="content">
        <div class="head">
          <div>
            <h1>{{ spotlightData.title }}</h1>
            <h2>{{ spotlightData.subtitle }}</h2>
            <a v-if="spotlightData.link" :style="{'background': spotlightData.color}" :href="spotlightData.link">{{ spotlightData.button }}</a>
          </div>
          <h6 class="dansicon" :style="{ color: spotlightData.color }">{{ spotlightData.icon }}</h6>
        </div>

        <div class="flow-text">
          <section class="flow-section" v-for="section in spotlightData.sections">
            <h4>{{ section.number }}</h4>
            <h3>{{ section.title }}</h3>
            <p>{{ section.text }}</p>

            <p v-for="subsection in section.subsections" class="subsection"><span>{{subsection.bold}} </span>{{subsection.content}}</p>
          
            <!-- Showing Images, really shitty, but parcel doesn't seem to support dynamic binding wtf -->
            <div v-if="spotlightData.title == 'DropSeed'">
              <div v-if="section.image == 1" class="flow-image">
                <img src="../res/DropSeed/img1.png">
                <h2><span>Main Screen: </span>A first look at the main screen with side and top bar showing the Note Overview.</h2>
              </div>

              <div v-if="section.image == 2" class="flow-image">
                <img src="../res/DropSeed/img2.png">
                <h2><span>Activity Screen: </span>Offering an overview of what has been going on lately as well as some metrics for the day.</h2>
              </div>

              <div v-if="section.image == 3" class="flow-image">
                <img src="../res/DropSeed/img3.png">
                <h2><span>Tasks Screen: </span>Create lists to organize tasks and claim tasks to show people what you're currently working on</h2>
              </div>

              <div v-if="section.image == 4" class="flow-image">
                <img src="../res/DropSeed/img4.png">
                <h2><span>Note Grid: </span>The grid offers a unique and flexible way to store and arrange information.</h2>
              </div>

              <div v-if="section.image == 5" class="flow-image">
                <img src="../res/DropSeed/img5.png">
                <h2><span>Tree Overview: </span>The tree overview gives you a grid with all your trees and a small preview showing the structure of a tree.</h2>
              </div>

              <div v-if="section.image == 6" class="flow-image">
                <img src="../res/DropSeed/img6.png">
                <h2><span>Tree Editor: </span>A look at what the tree concept looks like within DropSeed.</h2>
              </div>

              <div v-if="section.image == 7" class="flow-image">
                <img src="../res/DropSeed/img7.png">
                <h2><span>Thread View: </span>Communicate and share ideas, thoughts, notes, files etc. within DropSeed without having to download things over and over again.</h2>
              </div>

              <div v-if="section.image == 8" class="flow-image">
                <img src="../res/DropSeed/img8.png">
                <h2><span>Global Search: </span>Search the entire idea and preview elements without leaving your currently active tab</h2>
              </div>
            </div>
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


