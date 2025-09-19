//Two Sum : Check if a pair with given sum exists in Array

const arr = [2, 6, 5, 8, 11];
let sum = 15;
const hashMap = new Map();
const resultArr = [-1, 1];
for (i = 0; i < arr.length; i++) {
  hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
}

for (const [num, value] of hashMap) {
  if (hashMap.get(sum - num)) {
    [resultArr[0], resultArr[1]] = [num, sum - num];
    break;
  }
}

console.log(resultArr);
