//write a program to rotate array by k position.

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 5;
let count = 1;
if (!arr.length) {
  console.log('arr is empty');
  return;
}
while (count <= k) {
  for (i = 0; i < arr.length - 1; i++) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  count++;
}
console.log(arr);
