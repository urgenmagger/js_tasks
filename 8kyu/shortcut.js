// url the task -  codewars - https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
const shortcut = (string) => {
  const arrString = ["a", "e", "i", "o", "u"];
  console.log(arrString.length);
  string = [...String(string)];
  console.log(string.length);
  for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < arrString.length; k++) {
      console.log(i);
    }
  }
  console.log(string);
};

console.log(shortcut("string"));
