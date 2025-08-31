/* 

    *    

   ***   

  *****  

 ******* 

*********
*********

 ******* 

  *****  

   ***   

    *  

*/

//Print above given pattern

const n = 5;
for (i = 0; i < n; i++) {
  let result = '';
  for (j = 0; j < n - i - 1; j++) {
    result += ' ';
  }
  for (j = 0; j < 2 * i + 1; j++) {
    result += '*';
  }
  for (j = 0; j < n - i - 1; j++) {
    result += ' ';
  }
  result += '\n';
  console.log(result);
}
for (i = 0; i < n; i++) {
  let result = '';
  for (j = 0; j < i; j++) {
    result += ' ';
  }
  for (j = 0; j < 2 * n - (2 * i + 1); j++) {
    result += '*';
  }
  for (j = 0; j < i; j++) {
    result += ' ';
  }
  result += '\n';
  console.log(result);
}
