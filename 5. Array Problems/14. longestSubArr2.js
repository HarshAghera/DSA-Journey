//Longest Subarray with sum K | [Postives and Negatives]

const arr = [-1, 1, 1];
const k = 1;
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
