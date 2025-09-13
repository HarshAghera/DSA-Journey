//Write a program to shift array to the left by one position;

const arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length - 1; i++) {
  if (!arr.length || arr.length < 1) {
    return;
  }
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
console.log(arr);
