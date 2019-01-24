
/* Importing Modules */

import Vue from 'vue/dist/vue.common';
import VanillaTilt from 'vanilla-tilt';
import VueScrollTo from 'vue-scrollto';

/* Importing Components */
import Square from '/public/components/Square';
import Spotlight from '/public/components/Spotlight';

import EventBus from '/public/scrpt/bus.js';

Vue.use(VueScrollTo);

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
        class: "dropseed",
        lock: false,
      }, {
        title: "Machine Learning",
        subtitle: "",
        type: "CURRENT STUDIES",
        icon: "g",
        button: "View Progress",
        color: "#42CCBC",
        class: "ml",
        lock: true,
      }, {
        title: "The Big Short",
        subtitle: "Michael Lewis",
        type: "CURRENT READINGS",
        icon: "i",
        button: "View Full List",
        color: "#FF6060",
        class: "reading",
        lock: false,
      },
      {
        title: "UI Monday",
        subtitle: "",
        type: "DESIGN WORK",
        icon: "l",
        button: "Take A Look",
        color: "#373737",
        class: "ui-monday",
        lock: false,
      }, 
    ],
    spotlights: [
      {
        title: 'DropSeed',
        subtitle: 'A Framework For Your Ideas',
        type: 'PROJECT',
        icon: 'h',
        button: 'Visit Website',
        link: 'http://dropseed.xyz',
        color: '#4181FE',
      },
      {
        title: "Machine Learning",
        subtitle: "Just a topic I find really interesting",
        type: "CURRENT STUDIES",
        icon: "g",
        button: "",
        link: "",
        color: "#42CCBC",
      }, {
        title: "Readings",
        subtitle: "A collection of my most recent readings",
        type: "CURRENT READINGS",
        icon: "i",
        button: "",
        link: "",
        color: "#FF6060",
      }, 
      {
        title: 'UI Monday',
        subtitle: 'Trying to develop my design skills week over week',
        type: 'PROJECT',
        icon: 'l',
        button: 'Check Out My Dribbble',
        link: 'https://dribbble.com/danceladus',
        color: '#373737', 
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
