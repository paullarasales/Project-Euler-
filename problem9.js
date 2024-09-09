function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
    sum += i;
  }

  let squareOfSum = sum * sum; // Correct variable name here
  let result = squareOfSum - sumOfSquares; // Use the correct variable name

  return result;
}

console.log(sumSquareDifference(10)); // Output: 2640

