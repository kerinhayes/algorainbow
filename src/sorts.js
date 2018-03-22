

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

// function* merge (arr1, arr2) {
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
//     if (arr.length <= 1) { return arr; }
//
//     let mid = Math.floor(arr.length/2);
//
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//
//
//     yield merge(left, right);
//
//
// }


function quickSort(arr) {

    if (arr.length <= 1) { return arr; }


      const pivot = arr[0];

      let left = arr.slice(1).filter( (el) => el < pivot);
      let right = arr.slice(1).filter( (el) => el >= pivot);

        left = quickSort(left);
        right = quickSort(right);

      return left.concat([pivot]).concat(right);
    }

    module.exports = { bubbleSort, quickSort, selectionSort };
