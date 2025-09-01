/* 

1

01

101

0101

10101

*/

//Print above given pattern

const n = 5;
let start = 1;
for (i = 0; i < n; i++) {
  let result = '';
  if (i % 2 == 0) start = 1;
  else start = 0;
  for (j = 0; j <= i; j++) {
    result += start;
    start = 1 - start;
  }
  result += '\n';
  console.log(result);
}
