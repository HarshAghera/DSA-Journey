// Write a program to perform linear search on array & find given element

const arr = [1, 2, 3, 4, 5];
const ele = 6;
let idx = -1;
for (i = 0; i <= arr.length; i++) {
  if (arr[i] == ele) {
    idx = i;
    break;
  }
}

if (idx != -1) {
  console.log(`Position of ${ele} in array is at index`, i);
} else {
  console.log(`Given ele ${ele} not found in array`);
}
