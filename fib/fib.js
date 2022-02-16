const fib = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};
console.log(fib(4));

const fib_tail = (n, sum = 0, prev = 1) => {
  if (n <= 0) return sum;
  console.log("n",n)
  console.log("sum",sum)
  console.log("prev",prev)
  return fib_tail(n - 1, prev + sum, sum);
};
console.log('common sum', fib_tail(4));
