/* 

1        1

12      21

123    321

1234  4321

1234554321


*/

//Print above given pattern

const n = 5;
for (i = 1; i <= n; i++) {
  let result = '';
  for (j = 1; j <= i; j++) {
    result += j;
  }
  for (j = 1; j <= 2 * (n - i); j++) {
    result += ' ';
  }
  for (j = i; j >= 1; j--) {
    result += j;
  }
  result += '\n';
  console.log(result);
}
