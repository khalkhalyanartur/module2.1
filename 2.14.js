/*
Даны две строки. Напишите функцию, которая определит, содержится ли 
меньшая по длине строка в большей.

Input: ("text education part 2", "text")
Output: true

Input: ("text education part 2", "test")
Output: false
*/
const string2 = "text education part 2";
const string1 = "part";

const isContainsString = (string, subString) => {
  let tempString = '';

  if (string.length < subString.length) {
    tempString = subString;
    subString = string;
    string = tempString;
  }


  for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[0]) {
      for (let j = 0; j < subString.length; j++) {

        if (string[i + j] != subString[j]) {
          break;
        }

        if (string[i + j] === subString[j] && j == subString.length - 1) {
          return true;
        }
      }
    } 
  }

  return false;
}  

console.log(isContainsString(string1, string2));
