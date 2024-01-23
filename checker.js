const text1 = "Enter text 1";
const text2 = "Enter text 2";

// check for ; in this case
const checker = ";";

let text1Counter = 0;
let text2Counter = 0;

for (let i = 0; i < text1.length; i++) {
  if (text1[i] === checker) {
    text1Counter++;
  }
}

for (let i = 0; i < text2.length; i++) {
  if (text2[i] === checker) {
    text2Counter++;
  }
}

console.log(text1Counter);
console.log(text2Counter);
