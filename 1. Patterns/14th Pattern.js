/* 

A B C D E 

A B C D 

A B C 

A B 

A 

*/

//Print above given pattern

const n = 5;
for (i = n; i > 0; i--) {
  let result = '';
  for (j = 0; j < i; j++) {
    result += String.fromCharCode(65 + j) + ' ';
  }
  result += '\n';
  console.log(result);
}
