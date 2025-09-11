//find the largest number in array.

const arr = [7, 5, 9, 1, 7, 5, 2, 5];

let max = arr[0];
let i = 0;
if (arr.length == 0) return -1;

while (i <= arr.length - 1) {
  if (arr[i] > max) {
    max = arr[i];
  }
  i++;
}
console.log('Largest number in array is:', max);
