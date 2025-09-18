//write a program to find element with single occurence in the array

const arr = [4, 1, 2, 1, 2];
let hashMap = new Map();
for (i = 0; i <= arr.length - 1; i++) {
  hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
}

for (const [num, count] of hashMap) {
  if (count === 1) {
    console.log('Element with single presence is:', num);
  }
}
