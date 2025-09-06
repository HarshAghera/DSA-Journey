//write a program to find char count using hashing or hashmap

let str = 'aabbc';
const hash = new Map();
for (char of str) {
  hash.set(char, (hash.get(char) || 0) + 1);
}

console.log(hash.get('a'));
