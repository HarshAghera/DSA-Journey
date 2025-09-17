//Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array

const arr = [1, 3];
const n = 3;
const s1 = (n * (n + 1)) / 2;

let s2 = 0;
for (let i = 0; i < n - 1; i++) {
  s2 += arr[i];
}
console.log(s1 - s2);
