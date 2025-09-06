//write a program to find element with maximum occurence
const arr = [1, 1, 4, 5, 7, 7, 8, 9, 6, 3, 3, 6, 6];
let count = 0;
const hashMap = new Map();
let maxOccuredElem;

for (ele of arr) {
  hashMap.set(ele, (hashMap.get(ele) || 0) + 1);
  if (hashMap.get(ele) > count) {
    count++;
    maxOccuredElem = ele;
  }
}

console.log('Element with max occurences is', maxOccuredElem);
