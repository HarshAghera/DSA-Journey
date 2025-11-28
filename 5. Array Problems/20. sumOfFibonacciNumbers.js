//First find the maximum number in the array.
//Then generate Fibonacci numbers up to that max.
//Then check each array element and see if it exists in the Fibonacci set.
//Sum only those numbers.

function getFibonacciArr(limit) {
  let fibonacciArr = [0, 1];
  for (let i = 1; i <= limit; i++) {
    const sum = fibonacciArr[i - 1] + fibonacciArr[i];
    fibonacciArr.push(sum);
    if (sum >= limit) break;
  }
  return fibonacciArr;
}

function sumOfFibonacci(arr) {
  const resultArr = getFibonacciArr(arr.sort((a, b) => a - b)[arr.length - 1]);
  const sumArr = arr.filter((item) =>
    Array.from(new Set(resultArr)).includes(item),
  );
  return sumArr.reduce((curr, acc) => {
    return curr + acc;
  }, 0);
}

console.log(sumOfFibonacci([13, 1, 21, 4, 8]));
