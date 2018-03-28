/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Background {\n  constructor(ctx) {\n    this.ctx = ctx;\n\n    this.draw();\n  }\n\n\n  draw() {\n\n    this.ctx.fillStyle = 'rgba(204, 204, 255, 1)';\n    this.ctx.fillRect(0, 0, 900, 900);\n  }\n}\n\nmodule.exports = Background;\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Sorts = __webpack_require__(/*! ./sorts.js */ \"./src/sorts.js\");\nconst Visuals = __webpack_require__(/*! ./visuals.js */ \"./src/visuals.js\");\nconst Background = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"window-canvas\");\n  const context = canvas.getContext(\"2d\");\n  const vis = new Visuals(context);\n\n\n  const mergecan = document.getElementById(\"merge-canvas\");\n  const mergeCon = mergecan.getContext(\"2d\");\n  const mergeVis = new Visuals(mergeCon);\n\n  const bubCan = document.getElementById(\"bubble-canvas\");\n  const bubCon = bubCan.getContext(\"2d\");\n  const bubVis = new Visuals(bubCon);\n\n  const selCan = document.getElementById(\"selection-canvas\");\n  const selCon = selCan.getContext(\"2d\");\n  const selVis = new Visuals(selCon);\n\n  // const backCan = document.getElementById(\"background-canvas\");\n  // const backContext = backCan.getContext(\"2d\");\n  // const background = new Background(backContext);\n\n  const insertCan = document.getElementById(\"insertion-canvas\");\n  const insertCon = insertCan.getContext(\"2d\");\n  const insertVis = new Visuals(insertCon);\n\n  const mergeButton = document.getElementById(\"merge\");\n    mergeButton.addEventListener(\"click\", () =>\n    mergeVis.goDraw(Sorts.mergeSortBottomUp));\n\n  const bubbleButton = document.getElementById(\"bubble\");\n    bubbleButton.addEventListener(\"click\", () =>\n    bubVis.goDraw(Sorts.bubbleSort, 40));\n\n  const selectionButton = document.getElementById(\"selection\");\n    selectionButton.addEventListener(\"click\", () =>\n    selVis.goDraw(Sorts.selectionSort, 40));\n\n  const quickButton = document.getElementById(\"quick\");\n    quickButton.addEventListener(\"click\", () =>\n    vis.goDraw(Sorts.qsort));\n\n  const insertButton = document.getElementById('insert');\n    insertButton.addEventListener(\"click\", () =>\n    insertVis.goDraw(Sorts.insertionSort, 40));\n\n\n    const shuffleButton = document.getElementById(\"shuffle\");\n      shuffleButton.addEventListener(\"click\", () => {\n        bubVis.shuffleArray(bubVis.nums);\n        selVis.shuffleArray(selVis.nums);\n        mergeVis.shuffleArray(mergeVis.nums);\n        vis.shuffleArray(vis.nums);\n        insertVis.shuffleArray(insertVis.nums);\n\n      });\n\n    const allGo = document.getElementById('start-all');\n      allGo.addEventListener('click', () => {\n        bubVis.goDraw(Sorts.bubbleSort, 50);\n        selVis.goDraw(Sorts.selectionSort, 50);\n        mergeVis.goDraw(Sorts.mergeSortBottomUp);\n        vis.goDraw(Sorts.qsort);\n        insertVis.goDraw(Sorts.insertionSort, 50);\n\n      });\n\n\n\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sorts.js":
/*!**********************!*\
  !*** ./src/sorts.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nArray.prototype.flatten = function () {\nlet flattened = [];\n\nthis.forEach( (el) => {\n  if (el instanceof Array) {\n    flattened = flattened.concat(el.flatten());\n  } else {\n    flattened.push(el);\n  }\n});\n  return flattened;\n};\n\nfunction* bubbleSort(arr, slow) {\n  let counter = 0;\n  let sorted = false;\n    while (!sorted) {\n      sorted = true;\n      for (let i = 0; i < arr.length - 1; i++) {\n        counter ++;\n        if (arr[i] > arr[i + 1]) {\n          sorted = false;\n          // yield sorted;\n          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];}\n        }\n\n        yield sorted;\n    }\n    console.log(counter);\n}\n\nfunction* insertionSort(array) {\n  let counter = 0;\n  for(let i= 0; i < array.length; i++) {\n    let temp = array[i];\n    let j = i - 1;\n    while (j >= 0 && array[j] > temp) {\n      array [j + 1] = array[j];\n      counter ++;\n      j--;\n    }\n    yield array;\n    array[j + 1] = temp;\n  }\n  console.log(counter);\n}\n\nfunction* selectionSort(arr) {\n  let counter = 0;\n    for(let j = 0; j < arr.length - 1; j++) {\n      let min = j;\n        for(let i = j + 1; i < arr.length; i++) {\n          if (arr[i] < arr[min]) {\n            counter ++;\n            min = i;\n            // yield min;\n\n          }\n        }\n        if (j !== min) {\n          [arr[j], arr[min]] = [arr[min], arr[j]];\n          counter ++;\n          yield min;\n        }\n    }\n    console.log(counter);\n}\n\n\nfunction* mergeSortBottomUp(array) {\n  let counter = 0;\n  let step = 1;\n  while (step < array.length) {\n    counter ++;\n    let left = 0;\n    while (left + step < array.length) {\n      mergeBottomUp(array, left, step);\n      left += step * 2;\n      counter ++;\n      yield step;\n\n    }\n    step *= 2;\n\n  }\n  console.log(counter);\n}\n\nfunction mergeBottomUp(array, left, step) {\n\n  let right = left + step;\n  let end = Math.min(left + step * 2 - 1, array.length - 1);\n  let leftMoving = left;\n  let rightMoving = right;\n  let temp = [];\n\n  for (let i = left; i <= end; i++) {\n    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&\n        leftMoving < right) {\n      temp[i] = array[leftMoving];\n      leftMoving++;\n\n    } else {\n      temp[i] = array[rightMoving];\n      rightMoving++;\n\n    }\n  }\n\n  for (let j = left; j <= end; j++) {\n    array[j] = temp[j];\n\n  }\n\n}\n\n\nfunction* qsort(arr) {\n    let stack = [arr];\n    let sorted = [];\n    while (stack.length) {\n        let temp = stack.pop(), tl = temp.length;\n\n\n        if (tl === 1) {\n            sorted.push(temp[0]);\n            continue;\n        }\n        let pivot = temp[0];\n        let left = [], right = [];\n\n        for (let i = 1; i < tl; i++) {\n            if (temp[i] < pivot) {\n                left.push(temp[i]);\n            } else {\n                right.push(temp[i]);\n            }\n        }\n\n\n        left.push(pivot);\n\n        if (right.length)\n            stack.push(right);\n        if (left.length)\n            stack.push(left);\n\n            let flat = stack.flatten().reverse();\n            let tempor = sorted.concat(flat);\n            for(let j = 0; j < tempor.length; j++) {\n\n            arr[j] = tempor[j];\n          }\n          yield arr;\n    }\n\n\n}\n\n\n\n  module.exports = { qsort, bubbleSort, selectionSort, mergeSortBottomUp, insertionSort };\n\n\n//# sourceURL=webpack:///./src/sorts.js?");

/***/ }),

/***/ "./src/visuals.js":
/*!************************!*\
  !*** ./src/visuals.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Sorts = __webpack_require__(/*! ./sorts.js */ \"./src/sorts.js\");\n\nclass Visuals {\n\n  constructor(ctx) {\n    this.nums = [];\n    this.ctx = ctx;\n    this.colorMap = {\n      1: 'rgba(255, 51, 51,',\n      2: 'rgba(255, 102, 51,',\n      3: 'rgba(255, 153, 51,',\n      4: 'rgba(255, 204, 51,',\n      5: 'rgba(255, 255, 51,',\n      6: 'rgba(204, 255, 51,',\n      7: 'rgba(153, 255, 51,',\n      8: 'rgba(102, 255, 51,',\n      9: 'rgba(51, 255, 51,',\n      10: 'rgba(51, 255, 102,',\n      11: 'rgba(51, 255, 153,',\n      12: 'rgba(51, 255, 204,',\n      13: 'rgba(51, 255, 255,',\n      14: 'rgba(51, 204, 255,',\n      15: 'rgba(51, 153, 255,',\n      16: 'rgba(51, 102, 255,',\n      17: 'rgba(51, 51, 255,',\n      18: 'rgba(102, 51, 255,',\n      19: 'rgba(153, 51, 255,',\n      20: 'rgba(204, 51, 255,',\n      21: 'rgba(255, 51, 255,',\n      22: 'rgba(255, 51, 204,',\n      23: 'rgba(255, 51, 153,',\n      24: 'rgba(255, 51, 119,',\n      25: 'rgba(255, 51, 102,',\n      26: 'rgba(255, 51, 51,'\n    };\n\n\n      this.popArray();\n      this.shuffleArray(this.nums);\n      this.draw();\n      // this.goDraw(Sorts.selectionSort);\n      // this.goDraw(Sorts.mergeSortBottomUp, 10);\n\n  }\n\n\n  shuffleArray(array = this.nums) {\n    for (let i = array.length - 1; i > 0; i--) {\n      let j = Math.floor(Math.random() * (i + 1));\n      [array[i], array[j]] = [array[j], array[i]];\n    }\n      this.ctx.clearRect(0, 0, 520, 75);\n      this.draw();\n  }\n\n  popArray() {\n\n    const keys = Object.keys(this.colorMap).map(num => parseInt(num));\n\n    for(let j = 0; j < 26; j++) {\n      for(let i = 0; i < 20; i++) {\n\n        this.nums.push(keys[j]);\n      }\n    }\n    return this.nums;\n  }\n\n  draw() {\n    this.nums.forEach((num, idx)=> {\n      // let gradient = this.ctx.createLinearGradient(0, 0, 0, 75);\n      // gradient.addColorStop(0, `${this.colorMap[num]} .9)`);\n      // gradient.addColorStop(.25, `${this.colorMap[num]} .75)`);\n      // gradient.addColorStop(.5, `${this.colorMap[num]} .5)`);\n      // gradient.addColorStop(.75, `${this.colorMap[num]} .25)`);\n      // gradient.addColorStop(1, `${this.colorMap[num]} .1)`);\n      this.ctx.fillStyle = `${this.colorMap[num]} .9)`;\n      this.ctx.fillRect(idx, 0, 1, 75);\n\n\n    });\n\n  }\n\n  goDraw(sorter, fps) {\n\n    const sort = sorter(this.nums);\n\n\n    const animate = () => {\n      const that = this;\n      setTimeout(function() {\n        requestAnimationFrame(animate);\n        sort.next();\n        that.ctx.clearRect(0, 0, 520, 75);\n        that.draw();\n      }, 1000/fps);\n\n      };\n\n\n      animate();\n\n  }\n\n\n\n}\n\nmodule.exports = Visuals;\n\n\n//# sourceURL=webpack:///./src/visuals.js?");

/***/ })

/******/ });