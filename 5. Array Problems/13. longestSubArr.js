//Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

const arr = [2, 3, 5, 1, 9];
const k = 10;
let sum = 0;
let maxLength = 0;
let counter = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
  counter++;
  if (sum === k) {
    maxLength = maxLength < counter ? counter : maxLength;
    counter = 0;
    sum = 0;
  }
}
console.log(maxLength);
