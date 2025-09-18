//write a program to find max occurence of 1s

const arr = [1, 0, 1, 1, 0, 1];
let counter = 0;
let maxOccurence = 0;
for (i = 0; i <= arr.length - 1; i++) {
  if (arr[i] === 1) {
    counter++;
    maxOccurence = counter > maxOccurence ? counter : maxOccurence;
  } else {
    counter = 0;
  }
}

console.log(maxOccurence);
