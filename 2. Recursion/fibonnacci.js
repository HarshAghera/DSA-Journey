//write a program to print fibonacci series

let first = 0;
let second = 1;
let n = 6;
let count = 0;
let resultArr = [];
function fibonnaciSeries(n) {
  resultArr[count] = first;
  resultArr[count + 1] = second;
  if (resultArr.length > n) {
    console.log(resultArr.join(','));
    return;
  }
  first = second;
  second = resultArr[count] + resultArr[count + 1];
  count++;
  fibonnaciSeries(n);
}
fibonnaciSeries(n);
