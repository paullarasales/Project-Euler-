/*The prime factors of $13195$ are $5, 7, 13$ and $29
 * hat is the largest prime factor of the number 600851475143*/ 

function primeFactors(n) {
  let factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i +=2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

let number = 600851475143;
const result = primeFactors(number);
console.log(result);
