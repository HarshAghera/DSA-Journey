/* 

 1 

 2  2 

 3  3  3 

 4  4  4  4 

 5  5  5  5  5 

*/

//Print above given pattern

for (i = 0; i <= 4; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += ` ${i + 1} `;
  }
  result += '\n';
  console.log(result);
}
