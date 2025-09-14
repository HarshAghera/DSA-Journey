//write a program to move all zeros to end by preserving the order of other elements.
const arr = [1, 2, 0, 1, 0, 4, 0];
if (!arr.length) {
  console.log('arr is empty');
  return;
}

for (i = 0; i < arr.length - 1; i++) {
  if (arr[i] == 0) {
    arr.splice(i, 1);
    arr.push(0);
  }
}
console.log(arr);
