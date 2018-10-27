const VanillaTilt = require('vanilla-tilt');
const Vue = require('vue');

/* Vue Stuff */

var app = new Vue({
  el: "#main",
  data: {
    categories: [
      {
        title: "DropSeed",
        subtitle: "",
        type: "Project",
        icon: "h",
        button: "View Project",
        color: "#4181FE",
        background: "url(../../res/back1.svg) center center / cover"
      }, {
        title: "Machine Learning",
        subtitle: "Ray Dalio",
        type: "Current Studies",
        icon: "g",
        button: "View Progress",
        color: "#42CCBC",
        background: "url(../../res/back2.svg) center center / cover"
      }, {
        title: "Big Debt Crises",
        subtitle: "Ray Dalio",
        type: "Current Readings",
        icon: "i",
        button: "View Full List",
        color: "#FF6060",
        background: "url(../../res/back3.svg) center center / cover"
      }, 
    ],
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".tilt"));
  }
});