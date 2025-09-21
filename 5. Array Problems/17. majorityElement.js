//write a program to find majority element that has more occurence  than (arr length/2).
const arr = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
const hash = new Map();
for (i = 0; i < arr.length; i++) {
  hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
}

for (const [num, count] of hash) {
  if (count > arr.length / 2) {
    console.log(num);
    break;
  }
}
