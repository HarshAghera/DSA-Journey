//write a program to remove duplicates from a sorted array.

const arr = [1, 2, 5, 5, 5, 5, 6, 6, 7, 9, 9];
let i = 0;
if (!arr.length) {
  console.log('arr is empty');
  return;
}
for (j = 1; j < arr.length; j++) {
  if (arr[j] !== arr[i]) {
    i++;
    arr[i] = arr[j];
  }
}
const uniqueArr = arr.slice(0, i + 1);
console.log(uniqueArr);
