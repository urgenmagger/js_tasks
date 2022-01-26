const fib = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};
//console.log(fib(40));

const fib_iter = (n) => {
  let previos = 0;
  let next = 1;
  while(n--) {
    current = previos + next;
    previos = next;
    next = current;
  }
  return current;
};
console.log(fib_iter(8));
