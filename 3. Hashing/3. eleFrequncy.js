//write a program to count frequencies of array elements
const arr = [1, 1, 4, 5, 7, 7, 8, 9, 6, 3, 3, 6];

const hashMap = new Map();

for (ele of arr) {
  hashMap.set(ele, (hashMap.get(ele) || 0) + 1);
}

console.log(hashMap);
