const Sorts = require('./sorts.js');
const Visuals = require('./visuals.js');
const Background = require('./background.js');


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("window-canvas");
  const context = canvas.getContext("2d");
  const vis = new Visuals(context);


  const mergecan = document.getElementById("merge-canvas");
  const mergeCon = mergecan.getContext("2d");
  const mergeVis = new Visuals(mergeCon);

  const bubCan = document.getElementById("bubble-canvas");
  const bubCon = bubCan.getContext("2d");
  const bubVis = new Visuals(bubCon);

  const selCan = document.getElementById("selection-canvas");
  const selCon = selCan.getContext("2d");
  const selVis = new Visuals(selCon);

  const backCan = document.getElementById("background-canvas");
  const backContext = backCan.getContext("2d");
  const background = new Background(backContext);

    const mergeButton = document.getElementById("merge");
      mergeButton.addEventListener("click", () =>
      mergeVis.goDraw(Sorts.mergeSortBottomUp, 60));

    const bubbleButton = document.getElementById("bubble");
      bubbleButton.addEventListener("click", () =>
      bubVis.goDraw(Sorts.bubbleSort, 500));

    const selectionButton = document.getElementById("selection");
      selectionButton.addEventListener("click", () =>
      selVis.goDraw(Sorts.selectionSort, 60));

    const quickButton = document.getElementById("quick");
      quickButton.addEventListener("click", () =>
      vis.goDraw(Sorts.qsort, 60));


    const shuffleButton = document.getElementById("shuffle");
      shuffleButton.addEventListener("click", () => {
        bubVis.shuffleArray(bubVis.nums);
        selVis.shuffleArray(selVis.nums);
        mergeVis.shuffleArray(mergeVis.nums);
      });

    const allGo = document.getElementById('start-all');
      allGo.addEventListener('click', () => {
        bubVis.goDraw(Sorts.bubbleSort, 500);
        selVis.goDraw(Sorts.selectionSort, 60);
        mergeVis.goDraw(Sorts.mergeSortBottomUp, 60);


      });





});
