// Write an program to reverse an array

const str = 'madam';
let reverseStr = '';
let count = 0;
let n = str.length;

function reverseString(n) {
  reverseStr += str[n - count - 1];
  if (count >= n - 1) {
    return;
  }
  count++;
  reverseString(n);
}
reverseString(n);

console.log(
  str == reverseStr ? 'String is palindrome' : 'String is not palindrome',
);
