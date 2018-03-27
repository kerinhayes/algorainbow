
Array.prototype.flatten = function () {
let flattened = [];

this.forEach( (el) => {
  if (el instanceof Array) {
    flattened = flattened.concat(el.flatten());
  } else {
    flattened.push(el);
  }
});
  return flattened;
};

function* bubbleSort(arr, slow) {
  let counter = 0;
  let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        counter ++;
        if (arr[i] > arr[i + 1]) {
          sorted = false;
          // yield sorted;
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];}
        }

        yield sorted;
    }
    console.log(counter);
}

function* insertionSort(array) {
  let counter = 0;
  for(let i= 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array [j + 1] = array[j];
      counter ++;
      j--;
    }
    yield array;
    array[j + 1] = temp;
  }
  console.log(counter);
}

function* selectionSort(arr) {
  let counter = 0;
    for(let j = 0; j < arr.length - 1; j++) {
      let min = j;
        for(let i = j + 1; i < arr.length; i++) {
          if (arr[i] < arr[min]) {
            counter ++;
            min = i;
            // yield min;

          }
        }
        if (j !== min) {
          [arr[j], arr[min]] = [arr[min], arr[j]];
          counter ++;
          yield min;
        }
    }
    console.log(counter);
}


function* mergeSortBottomUp(array) {
  let counter = 0;
  let step = 1;
  while (step < array.length) {
    counter ++;
    let left = 0;
    while (left + step < array.length) {
      mergeBottomUp(array, left, step);
      left += step * 2;
      counter ++;
      yield step;

    }
    step *= 2;

  }
  console.log(counter);
}

function mergeBottomUp(array, left, step) {

  let right = left + step;
  let end = Math.min(left + step * 2 - 1, array.length - 1);
  let leftMoving = left;
  let rightMoving = right;
  let temp = [];

  for (let i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;

    } else {
      temp[i] = array[rightMoving];
      rightMoving++;

    }
  }

  for (let j = left; j <= end; j++) {
    array[j] = temp[j];

  }

}


function* qsort(arr) {
    let stack = [arr];
    let sorted = [];
    while (stack.length) {
        let temp = stack.pop(), tl = temp.length;


        if (tl === 1) {
            sorted.push(temp[0]);
            continue;
        }
        let pivot = temp[0];
        let left = [], right = [];

        for (let i = 1; i < tl; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }


        left.push(pivot);

        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);

            let flat = stack.flatten().reverse();
            let tempor = sorted.concat(flat);
            for(let j = 0; j < tempor.length; j++) {

            arr[j] = tempor[j];
          }
          yield arr;
    }


}



  module.exports = { qsort, bubbleSort, selectionSort, mergeSortBottomUp, insertionSort };
