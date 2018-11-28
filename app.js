
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
        lock: false,
      }, {
        title: "Big Debt Crises",
        subtitle: "Ray Dalio",
        type: "CURRENT READINGS",
        icon: "i",
        button: "View Full List",
        color: "#FF6060",
        class: "reading",
        lock: false,
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
        class: "dropseed", 
        sections: [
          {
            number: '01',
            title: 'The Background',
            text: 'It all started as a personal project, just for us. We found ourselves digging through forests of thoughts spread across many different apps and sloppily written notes. Messages on Slack, files stored on DropBox, notes shared on Evernote and many ideas and random thoughts written down on whatever piece of paper had been nearest. There had to be a better way. As we were planning on working together on many projects in the future, we thought it would be cool to have a platform to base our work on. So we started working on it. With time the concept grew and we decided to make it public for everyone to use. We’d learn a lot about taking a large web app from 0 onto the desktops of users and it might help some people out there channel their inner stream of ideas. A win-win.',
            image: 'back1.fe7a3fe5.svg',

          },
          {
            number: '02',
            title: 'The Idea',
            text: 'More Tests',
            image: 'back1.fe7a3fe5.svg',

          },
          {
            number: '03',
            title: 'The Name',
            text: 'Aaaand some more',
            image: 'back1.fe7a3fe5.svg',

          }
        ]
      }, {
        title: "Machine Learning",
        subtitle: "Just a topic I find really interesting",
        type: "CURRENT STUDIES",
        icon: "g",
        button: "View Progress",
        color: "#42CCBC",
        class: "ml"
      }, {
        title: "Readings",
        subtitle: "A collection of my most recent readings",
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
