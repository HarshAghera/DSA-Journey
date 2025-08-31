/* 

 * 

 *  * 

 *  *  * 

 *  *  *  * 

 *  *  *  *  * 

*/

//Print above given pattern

for (i = 0; i <= 4; i++) {
  let result = '';
  for (j = 0; j <= i; j++) {
    result += ' * ';
  }
  result += '\n';
  console.log(result);
}
