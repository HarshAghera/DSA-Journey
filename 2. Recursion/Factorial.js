let mul = 1;
function factorial(n) {
  mul *= n;

  if (n <= 1) {
    console.log(mul);
    return;
  }
  n--;
  factorial(n);
}
factorial(5);
