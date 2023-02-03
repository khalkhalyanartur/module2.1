/*
Даны две строки. Напишите функцию, которая определит, содержится ли меньшая по длине строка в большей.

Input: ("text education part 2", "text")
Output: true

Input: ("text education part 2", "test")
Output: false
*/
const string1 = "text education part 2";
const string2 = "part";

const isContains = (string, subString) => {

  for (let i = 0; i < string.length; i++) {
    if (string[i] == subString[0]) {
      for (let j = 0; j < subString.length; j++) {
        if (string[i+j] != subString[j]) {
          break;
        }
        if (string[i+j] === subString[j] && j == subString.length - 1) {
          return true;
        }
      }
    } 
  }

  return false;
}  

console.log(isContains(string1,string2));
