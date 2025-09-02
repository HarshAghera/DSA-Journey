/* 

A 

B B 

C C C 

D D D D 

E E E E E 

*/

//Print above given pattern

const n = 5;
for (i = 0; i < n; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += String.fromCharCode(65 + i) + ' ';
  }
  result += '\n';
  console.log(result);
}
