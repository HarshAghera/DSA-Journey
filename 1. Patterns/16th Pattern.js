/* 

   A   

  ABA  

 ABCBA 

ABCDCBA


*/

//Print above given pattern

const n = 4;
for (i = 0; i < n; i++) {
  let result = '';

  for (j = 0; j < n - i - 1; j++) {
    result += ' ';
  }

  let charCount = 65;
  const breakPoint = i;
  for (j = 0; j < 2 * i + 1; j++) {
    result += String.fromCharCode(charCount);
    if (j < breakPoint) {
      charCount++;
    } else {
      charCount--;
    }
  }

  for (j = 0; j < n - i - 1; j++) {
    result += ' ';
  }
  result += '\n';
  console.log(result);
}
