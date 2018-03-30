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

  // const backCan = document.getElementById("background-canvas");
  // const backContext = backCan.getContext("2d");
  // const background = new Background(backContext);

  const insertCan = document.getElementById("insertion-canvas");
  const insertCon = insertCan.getContext("2d");
  const insertVis = new Visuals(insertCon);

  const mergeButton = document.getElementById("merge");
    mergeButton.addEventListener("click", () => {
      if (mergeVis.ready === false) {
        mergeVis.ready = true;
        mergeVis.shuffleArray(mergeVis.nums);
        mergeVis.goDraw(Sorts.mergeSortBottomUp);
      }
      mergeVis.goDraw(Sorts.mergeSortBottomUp);
      mergeVis.ready = false;
    });

  const bubbleButton = document.getElementById("bubble");
    bubbleButton.addEventListener("click", () => {
      bubVis.fps = 40;
      if (bubVis.ready === false) {
        bubVis.ready = true;
        bubVis.shuffleArray(bubVis.nums);
        bubVis.goDraw(Sorts.bubbleSort);
      }
      bubVis.goDraw(Sorts.bubbleSort);
      bubVis.ready = false;
    });

  const selectionButton = document.getElementById("selection");
    selectionButton.addEventListener("click", () => {
      selVis.fps = 40;
      if (selVis.ready === false) {
        selVis.ready = true;
        selVis.shuffleArray(selVis.nums);
        selVis.goDraw(Sorts.selectionSort);
      }
      selVis.goDraw(Sorts.selectionSort);
      selVis.ready = false;
    });

  const quickButton = document.getElementById("quick");
    quickButton.addEventListener("click", () => {
      if (vis.ready === false) {
        vis.ready = true;
        vis.shuffleArray(vis.nums);
        vis.goDraw(Sorts.qsort);
      }
      vis.goDraw(Sorts.qsort);
      vis.ready = false;
    });

  const insertButton = document.getElementById('insert');
    insertButton.addEventListener("click", () => {
      insertVis.fps = 40;
      if (insertVis.ready === false) {
        insertVis.ready = true;
        insertVis.shuffleArray(insertVis.nums);
        insertVis.goDraw(Sorts.insertionSort);
      }
      insertVis.goDraw(Sorts.insertionSort);
      insertVis.ready = false;
    });


    const shuffleButton = document.getElementById("shuffle");
      shuffleButton.addEventListener("click", () => {
        bubVis.shuffleArray(bubVis.nums);
        selVis.shuffleArray(selVis.nums);
        mergeVis.shuffleArray(mergeVis.nums);
        vis.shuffleArray(vis.nums);
        insertVis.shuffleArray(insertVis.nums);

      });

    const allGo = document.getElementById('start-all');
      allGo.addEventListener('click', () => {


        bubVis.goDraw(Sorts.bubbleSort, 50, true);
        selVis.goDraw(Sorts.selectionSort, 50, true);
        mergeVis.goDraw(Sorts.mergeSortBottomUp, null, true);
        vis.goDraw(Sorts.qsort, null, true);
        insertVis.goDraw(Sorts.insertionSort, 50, true);

      });





});
