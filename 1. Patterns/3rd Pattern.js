/* 

 1

 1  2 

 1  2  3 

 1  2  3  4 

 1  2  3  4  5 

*/

//Print above given pattern

for (i = 0; i <= 4; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += ` ${j + 1} `;
  }
  result += '\n';
  console.log(result);
}
