import "./styles.css";

// first way is using loop:
/*
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;
} 
*/

//second way is using methodes:

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("HELLO"));

document.getElementById("app").innerHTML = reverseString("HELLO");
