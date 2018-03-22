const Sorts = require('./sorts.js');
const Visuals = require('./visuals.js');


document.addEventListener("DOMContentLoaded", () => {

  const can = document.getElementById("window-canvas");
  const context = can.getContext("2d");
    new Visuals(context);
});
