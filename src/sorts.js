

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
      }
    }
    yield min;
  }
}

// function merge (arr1, arr2) {
//   let merged = [];
//
//   while (arr1.length && arr2.length) {
//
//     if (arr1[0] < arr2[0]) {
//       merged.push(arr1.shift());
//     } else {
//       merged.push(arr2.shift());
//     }
//   }
//   merged = merged.concat(arr1).concat(arr2);
//   return merged;
//
// }
//
// function* mergeSort(arr) {
//
//     if (arr.length <= 1) { yield arr; }
//
//
//       let mid = Math.floor(arr.length/2);
//       yield arr;
//
//       let left = mergeSort(arr.slice(0, mid));
//       let right = mergeSort(arr.slice(mid));
//
//
//       yield merge(left, right);
//
// }

function* mergeSortBottomUp(array) {
  var step = 1;
  while (step < array.length) {
    var left = 0;
    while (left + step < array.length) {
      mergeBottomUp(array, left, step);
      left += step * 2;
      yield array;

    }
    step *= 2;

  }
}

function mergeBottomUp(array, left, step) {
  var right = left + step;
  var end = Math.min(left + step * 2 - 1, array.length - 1);
  var leftMoving = left;
  var rightMoving = right;
  var temp = [];

  for (var i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;
    } else {
      temp[i] = array[rightMoving];
      rightMoving++;
    }
  }

  for (var j = left; j <= end; j++) {
    array[j] = temp[j];
  }
}

function* qsort(arr) {
    var stack = [arr];
    var sorted = [];

    while (stack.length) {
        var temp = stack.pop(), tl = temp.length;

        if (tl === 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [], right = [];

        for (var i = 1; i < tl; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
            yield temp;
        }

        left.push(pivot);

        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);


    }

    yield sorted;


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
