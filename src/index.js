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

  function merge() {
      mergeButton.disabled = true;
      allGo.disabled = true;
      setTimeout(() => {
        mergeButton.disabled = false;
        allGo.disabled = false;}, 8000);
      if (mergeVis.ready === false) {
        mergeVis.ready = true;
        mergeVis.shuffleArray(mergeVis.nums);
        mergeVis.goDraw(Sorts.mergeSortBottomUp);
      }
      mergeVis.goDraw(Sorts.mergeSortBottomUp);
      mergeVis.ready = false;
  }

  const mergeButton = document.getElementById("merge");
    mergeButton.addEventListener("click", merge);

    function bubble() {
      bubbleButton.disabled = true;
      allGo.disabled = true;
      setTimeout(() => {
        bubbleButton.disabled = false;
        allGo.disabled = false;}, 18000);
      bubVis.fps = 40;
      if (bubVis.ready === false) {
        bubVis.ready = true;
        bubVis.shuffleArray(bubVis.nums);
        bubVis.goDraw(Sorts.bubbleSort);
      }
      bubVis.goDraw(Sorts.bubbleSort);
      bubVis.ready = false;
    }

  const bubbleButton = document.getElementById("bubble");
    bubbleButton.addEventListener("click", bubble);

    function select() {
      selectionButton.disabled = true;
      allGo.disabled = true;
      setTimeout(() => {
        selectionButton.disabled = false;
        allGo.disabled = false;}, 18000);
      selVis.fps = 40;
      if (selVis.ready === false) {
        selVis.ready = true;
        selVis.shuffleArray(selVis.nums);
        selVis.goDraw(Sorts.selectionSort);
      }
      selVis.goDraw(Sorts.selectionSort);
      selVis.ready = false;
    }

  const selectionButton = document.getElementById("selection");
    selectionButton.addEventListener("click", select);

  function quick() {

      quickButton.disabled = true;
      allGo.disabled = true;
      setTimeout(() => {
        quickButton.disabled = false;
        allGo.disabled = false;}, 8000);
      if (vis.ready === false) {
        vis.ready = true;
        vis.shuffleArray(vis.nums);
        vis.goDraw(Sorts.qsort);
      }
      vis.goDraw(Sorts.qsort);
      vis.ready = false;
  }

  const quickButton = document.getElementById("quick");
    quickButton.addEventListener("click", quick);

    function insert() {
      insertButton.disabled = true;
      allGo.disabled = true;
      setTimeout(() => {
        insertButton.disabled = false;
        allGo.disabled = false;}, 18000);
      insertVis.fps = 40;
      if (insertVis.ready === false) {
        insertVis.ready = true;
        insertVis.shuffleArray(insertVis.nums);
        insertVis.goDraw(Sorts.insertionSort);
      }
      insertVis.goDraw(Sorts.insertionSort);
      insertVis.ready = false;
    }

  const insertButton = document.getElementById('insert');
    insertButton.addEventListener("click", insert);

    //
    // const shuffleButton = document.getElementById("shuffle");
    //   shuffleButton.addEventListener("click", () => {
    //     bubVis.shuffleArray(bubVis.nums);
    //     selVis.shuffleArray(selVis.nums);
    //     mergeVis.shuffleArray(mergeVis.nums);
    //     vis.shuffleArray(vis.nums);
    //     insertVis.shuffleArray(insertVis.nums);
    //
    //   });

    const allGo = document.getElementById('start-all');
      allGo.addEventListener('click', () => {
        allGo.disabled = true;
        let timer;
        if (allGo.textContent === "sort all") {
          timer = 18000;
        } else { timer = 1; }


        setTimeout(() => { allGo.disabled = false;}, timer);

      if (allGo.textContent === "sort all") {
        allGo.textContent = "shuffle all";
        merge();
        quick();
        select();
        bubble();
        insert();
      } else {
        bubVis.shuffleArray(bubVis.nums);
        selVis.shuffleArray(selVis.nums);
        mergeVis.shuffleArray(mergeVis.nums);
        vis.shuffleArray(vis.nums);
        insertVis.shuffleArray(insertVis.nums);
        allGo.textContent = "sort all";

      }


      });





});
