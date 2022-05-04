const needle = (n) => {
  let position = 0;
  position = n.indexOf("needle");
  return `found the needle at position ${position}`;
};

const inputArray = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
console.log(needle(inputArray));
