function isPrime(num) {
  if (num < 0) {
    return false;
  }

  let length = num.toString().length;
  let primes = [2, 3, 5, 7];

  if (length === 1 && primes.includes(num)) {
    return true;
  }

  if (length === 1 && num === 1) {
    return false;
  }

  if (num % 2 === 0 || num % 5 === 0 || num % 3 === 0) {
    return false;
  }

  return true;
}

module.exports = isPrime;