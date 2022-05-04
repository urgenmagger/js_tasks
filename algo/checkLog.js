const check = (result) => {
  if (result <= 1) {
    return 0;
  }
  return check(console.log(result / 2));
};
console.log(check(10));
