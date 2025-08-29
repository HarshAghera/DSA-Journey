//write program to find index of target value using binary search algo.

//Prerequisites.
//1. Array needs to be sorted to use this algo

const arr = [1, 5, 7, 9, 11, 13, 15];
let low = 0;
let high = arr.length - 1;
const target = 7;
while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    console.log(mid);
    break;
  } else if (arr[mid] > target) high = mid - 1;
  else low = mid + 1;
}
