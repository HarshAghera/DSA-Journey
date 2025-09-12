//write a program to check if array is sorted or not.

const arr = [1, 5, 6, 6, 7, 9];
let i = 0;
let isSorted = true;
while (i <= arr.length - 2) {
  if (arr[i] <= arr[i + 1]) {
    i++;
  } else {
    isSorted = false;
    console.log('Array is not sorted in ascending order');
    break;
  }
}
if (isSorted) {
  console.log('Array is sorted in ascending order');
}
