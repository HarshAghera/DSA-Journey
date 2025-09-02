/* 

A 

A B 

A B C 

A B C D 

A B C D E 

*/

//Print above given pattern

const n = 5;
for (i = 0; i < n; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += String.fromCharCode(65 + j) + ' ';
  }
  result += '\n';
  console.log(result);
}
