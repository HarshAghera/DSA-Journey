// Find the Second largest element in the array

const arr = [7, 5, 9, 1, 7, 5, 2, 5];
if (arr.length < 2) return -1;
let max = arr[0];
let i = 0;
let secondMax = -1;
while (i <= arr.length - 1) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (secondMax <= arr[i] && arr[i] < max) {
    secondMAx = arr[i];
  }
  i++;
}

console.log('Second largest elem in arr is:', secondMax);
