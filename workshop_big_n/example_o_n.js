const sum = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("+", i);
  }
  for (let i = n; i > 0; i--) {
    console.log("-", i);
  }
};
console.log(sum(10));

const sum_2 = (n) => {
  console.log("arr", n);
  for (let i = 0; i < n.length / 2; i++) {
    console.log("i/2", n[i]);
  }
  for (let i = 0; i < 100; i++) {
    console.log("i:100", i);
  }
};
console.log(sum_2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const sum_3 = (n) => {
  while (n > 1) {
    n = n / 2;
    console.log("n/2", n);
  }
};
console.log(sum_3(100));
