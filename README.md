## algorainbow

A colorful sorting algorithm visualization built with JavaScript and HTML5 Canvas.

[see it here](http://kerinhayes.com/algorainbow)

### how it works

Each integer in an array is represented by one of 26 colors, and algorithms are implemented with iterative generator functions which send the array to be rendered at indicated steps of the sorting process.


```JavaScript
 function* bubbleSort(arr) {
  let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          sorted = false;
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];}
        }
        yield sorted;
    }
}
```

Animations show how elements are grouped and sorted and lower frame rates are used for the algorithms with slower time complexities to provide a more realistic picture.

```JavaScript
goDraw(sorter, fps) {
  const sort = sorter(this.nums);

  const animate = () => {
    const that = this;
      setTimeout(function() {
        requestAnimationFrame(animate);
        sort.next();
        that.ctx.clearRect(0, 0, 520, 75);
        that.draw();
      }, 1000/fps);
    };
    animate();
}
```

Buttons use event listeners so users can play animations, reshuffle, and play again.  Algorithms can be activated individually or all at once.

```JavaScript
const bubbleButton = document.getElementById("bubble");
  bubbleButton.addEventListener("click", () =>
  bubVis.goDraw(Sorts.bubbleSort, 40));
```

### how it looks

* Merge Sort
  * ![merge](https://github.com/kerinhayes/algorainbow/blob/master/images/merge-gif.gif)
* Bubble Sort
  * ![bubble](https://github.com/kerinhayes/algorainbow/blob/master/images/bubble-gif.gif)
* Quick Sort
  * ![quick](https://github.com/kerinhayes/algorainbow/blob/master/images/quick-gif.gif)
* Selection Sort
  * ![select](https://github.com/kerinhayes/algorainbow/blob/master/images/selection-gif.gif)
* Insertion Sort
  * ![insert](https://github.com/kerinhayes/algorainbow/blob/master/images/insertion-gif.gif)
