/* 

E
DE
CDE
BCDE
ABCDE


*/

//Print above given pattern

const n = 5;
for (let i = 0; i < n; i++) {
  let result = '';
  // starting character goes backwards each row
  let startChar = 69 - i; // 69 = 'E'
  for (let j = startChar; j <= 69; j++) {
    result += String.fromCharCode(j);
  }
  console.log(result);
}
