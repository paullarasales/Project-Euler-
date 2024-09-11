function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  return num;
}
const n = 6;
const result = nthPrime(n);
console.log(result);
