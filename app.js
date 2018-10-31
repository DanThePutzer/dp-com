
/* Importing Modules */

import Vue from 'vue/dist/vue.common';
import VanillaTilt from 'vanilla-tilt';

/* Importing Components */
import Square from '/public/components/Square';
import Spotlight from '/public/components/Spotlight';

import EventBus from '/public/scrpt/bus.js';

new Vue({
  el: "#main",
  data: {
    showSpotlight: false,
    activeSpotlight: 0,
    squares: [
      {
        title: "DropSeed",
        subtitle: "",
        type: "PROJECT",
        icon: "h",
        button: "View Project",
        color: "#4181FE",
        class: "dropseed"
      }, {
        title: "Machine Learning",
        subtitle: "",
        type: "CURRENT STUDIES",
        icon: "g",
        button: "View Progress",
        color: "#42CCBC",
        class: "ml"
      }, {
        title: "Big Debt Crises",
        subtitle: "Ray Dalio",
        type: "CURRENT READINGS",
        icon: "i",
        button: "View Full List",
        color: "#FF6060",
        class: "reading"
      }, 
    ],
    spotlights: [
      {
        title: "DropSeed",
        subtitle: "A Framework For Your Ideas",
        type: "PROJECT",
        icon: "h",
        button: "View Project",
        color: "#4181FE",
        class: "dropseed"
      }, {
        title: "Machine Learning",
        subtitle: "",
        type: "CURRENT STUDIES",
        icon: "g",
        button: "View Progress",
        color: "#42CCBC",
        class: "ml"
      }, {
        title: "Big Debt Crises",
        subtitle: "Ray Dalio",
        type: "CURRENT READINGS",
        icon: "i",
        button: "View Full List",
        color: "#FF6060",
        class: "reading"
      }, 
    ]
  },
  components: {
    Square, Spotlight
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".tilt"));

    EventBus.$on('openSpotlight', (index) => {
      this.showSpotlight = true;
      this.activeSpotlight = index;
    });
    
    EventBus.$on('closeSpotlight', () => {
			this.showSpotlight = false;
		});
  }
})
