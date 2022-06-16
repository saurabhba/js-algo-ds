const isPrimeNumber_unoptimized = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrimeNumber_optimized = (num) => {
  if (num === 2 || num === 3) {
    return true;
  }
  if (num <= 1 || (num % 2 === 0) | (num % 3 === 0)) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const sumOfAllPrimes_v1 = (num) => {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber_unoptimized(i)) {
      sum += i;
    }
  }

  return sum;
};

const sumOfAllPrimes = (num) => {
  return Array.from({ length: num + 1 }, (v, i) => i)
    .slice(2)
    .filter((num) => isPrimeNumber_optimized(num))
    .reduce((sum, num) => sum + num, 0);
};

export default sumOfAllPrimes;
