const factorial = (n) => {
  if (n < 0 || n > 12) {
    throw new RangeError("error");
  }
  if (n === 1 || n == 0) {
    return 1;
  } else {
    console.log("recursion", n);
    return n * factorial(n - 1);
  }
};
console.log(factorial(3));

const fact_iter = (n) => {
  if (n < 0 || n > 12) {
    throw new RangeError("error");
  }
  let result = n;
  if (n <= 1) {
    return 1;
  }
  while (n > 1) {
    n--;
    result *= n;
    console.log("iteration", n);
  }
  return result;
};

const fact_tco = (n, acc = 1) => {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
};
console.log(fact_tco(10));
