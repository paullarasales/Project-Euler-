function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMultiple(n) {
  let result = 1;
  for (let i = 2; i <=n; i++) {
    result = lcm(result, i);
  }
  return result;
}

console.log(smallestMultiple(20))
