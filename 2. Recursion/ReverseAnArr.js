// Write an program to reverse an array

const arr = [1, 2, 3, 4, 5, 6];
let count = 0;
let n = arr.length;

function reverseArr(n) {
  let temp;
  temp = arr[count];
  arr[count] = arr[n - count - 1];
  arr[n - count - 1] = temp;
  if (n % 2 == 0) {
    if (count >= n / 2 - 1) {
      return;
    }
  } else {
    if (count >= Math.floor(n / 2)) {
      return;
    }
  }
  count++;
  reverseArr(n);
}
reverseArr(n);

console.log(arr);
