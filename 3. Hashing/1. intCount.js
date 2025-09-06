//write a program to find int count using hashing or hashmap
let arr = [1, 2, 2, 3, 1];

const hash = new Map();
for (num of arr) {
  hash.set(num, (hash.get(num) || 0) + 1);
}

console.log(hash.get(1));
