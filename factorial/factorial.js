const factorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
//console.log(factorial(8));

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
console.log(fact_iter(20));
