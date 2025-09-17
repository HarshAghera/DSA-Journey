//write a code to find union of two sorted arrays keeping only distinct elements in unionArr;

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];
const uniqueArr = [];
let j = 0;
for (i = 0; i < arr1.length; i++) {
  if (i == 0) {
    uniqueArr.push(arr1[i]);
  } else {
    if (arr1[i] > uniqueArr[uniqueArr.length - 1]) {
      uniqueArr.push(arr1[i]);
    }
  }
  if (arr1[i] == arr2[j]) {
    arr2[j] = -1;
    j++;
  }
}
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] > uniqueArr[uniqueArr.length - 1]) {
    uniqueArr.push(arr2[i]);
  }
}

console.log(uniqueArr);
