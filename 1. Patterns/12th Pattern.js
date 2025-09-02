/* 

1 

2 3 

4 5 6 

7 8 9 10 

11 12 13 14 15 

*/

//Print above given pattern

const n = 5;
let count = 1;
for (i = 0; i < n; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += count + ' ';
    count++;
  }
  result += '\n';
  console.log(result);
}
