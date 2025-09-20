// Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

const arr = [2, 0, 2, 1, 1, 0, 2, 0, 1];

let zeros = 0,
  ones = 0,
  twos = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    zeros++;
  } else if (arr[i] == 1) {
    ones++;
  } else {
    twos++;
  }
}

for (i = 0; i < arr.length; i++) {
  if (zeros) {
    arr[i] = 0;
    zeros--;
  } else if (ones) {
    arr[i] = 1;
    ones--;
  } else if (twos) {
    arr[i] = 2;
    twos--;
  }
}

console.log(arr);
