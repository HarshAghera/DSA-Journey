//write a program to perform a quickSort on array;
//1. Partition function: Places pivot in correct position by moving smaller elements left and larger elements right, then returns pivot index.
//2. QuickSort function: Recursively sorts array by partitioning around pivot until fully sorted.

const arr = [7, 8, 6, 10, 4, 4, 2, 3];
function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pIdx = partition(arr, low, high);
    quickSort(arr, pIdx + 1, high);
    quickSort(arr, low, pIdx - 1);
  }
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
