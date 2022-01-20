const factorial = (n) => {
  if (n < 0 || n > 12) {
    throw new RangeError("error");
  }
  if (n === 1 || n == 0) {
    return 1;
  } else {
    console.log(n);
    return n * factorial(n - 1);
  }
};
console.log(factorial(4));

const fact_iter = (n) => {
  let result = n;
  if (n <= 1) {
    return 1;
  }
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
};
//console.log(fact_iter(20));
