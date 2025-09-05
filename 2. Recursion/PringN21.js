//Print N to 1

let count = 10;
function doSomethingRecursively(n) {
  console.log(n);
  if (count <= 1) {
    return;
  }
  count--;
  doSomethingRecursively(count);
}
doSomethingRecursively(count);
