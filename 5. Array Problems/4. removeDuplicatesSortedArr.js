//write a program to remove duplicates from a sorted array.
const arr = [1, 2, 5, 5, 5, 5, 6, 6, 7, 9, 9];
let i = 0;
let j = 1;
while (j <= arr.length) {
  if (arr[i] != arr[j]) {
    i++;
    j++;
  } else {
    arr.splice(j, 1);
  }
}
console.log(arr);
