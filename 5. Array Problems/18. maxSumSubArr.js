//Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0;
let subArrStartidx = 0;
let i = 0;
if (arr.length == 1) {
  return console.log(arr);
}

for (j = 0; j < arr.length; j++) {
  let tempSum = 0;
  tempSum = arr[i] + arr[j];
  if (tempSum > sum) {
    sum = tempSum;
    subArrStartidx = i;
  } else {
    i++;
  }
}
console.log(
  `Max sum is ${sum} for the subArr`,
  arr.slice(subArrStartidx, i + 1),
);
