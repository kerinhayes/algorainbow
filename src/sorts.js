

function* bubbleSort(arr) {
  let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false;
          yield sorted;
        }
      }
    }
}

function* selectionSort(arr) {
    for(let j = 0; j < arr.length - 1; j++) {
      let min = j;
        for(let i = j + 1; i < arr.length; i++) {
          if (arr[i] < arr[min]) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
          yield arr;
      }
    }
  }
}


function* mergeSortBottomUp(array) {
  let step = 1;
  while (step < array.length) {
    let left = 0;
    while (left + step < array.length) {
      mergeBottomUp(array, left, step);
      left += step * 2;
      yield array;

    }
    step *= 2;

  }
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
    let stack = arr.slice(1);
    let sorted = arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    let mid = arr.length/2;


    while (stack.length) {
      for(let i = 0; i < stack.length; i++) {
        if (stack[i] < pivot) {
          left.push(stack.shift);
        } else {
          right.push(stack.shift);
        }

      }
      yield left.concat(pivot).concat(right);
    }

}


function* quickSort(arr) {
  debugger;

    if (arr.length <= 1) { return arr; }


      const pivot = arr[0];

      let left = arr.slice(1).filter( (el) => el < pivot);
      let right = arr.slice(1).filter( (el) => el >= pivot);

        left = quickSort(left);
        right = quickSort(right);

      return left.concat([pivot]).concat(right);
    }

  module.exports = { bubbleSort, qsort, selectionSort, mergeSortBottomUp };
