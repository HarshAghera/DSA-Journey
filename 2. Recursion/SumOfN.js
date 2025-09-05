//Print sum of n numbers

let sum = 0;
function doSomethingRecursively(n) {
  sum += n;

  if (n <= 1) {
    console.log(sum);
    return;
  }
  n--;
  doSomethingRecursively(n);
}
doSomethingRecursively(10);
