function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
    sum += i;
  }

  let squareOfSum = sum * sum;
  let result = squareOfSum - sumOfSquares;

  return result;
}

console.log(sumSquareDifference(100));

