/* 

*********

 *******

  *****

   ***

    *

*/

//Print above given pattern

const n = 5;
for (i = n - 1; i >= 0; i--) {
  let result = '';
  for (j = 0; j < n - i - 1; j++) {
    result += ' ';
  }
  for (j = 0; j < 2 * i + 1; j++) {
    result += '*';
  }
  result += '\n';
  console.log(result);
}
