/*
Даны две строки. Написать функцию сравнения этих строк. 
Вывести символы большей строки, на количество которых отличается.
Input: ("text education part 2", "text education")
Output: " part 2"
*/

const compareStrings = (str1, str2) => {
  const longString = (str1.length > str2.length) ? str1 : str2;
  const shortString = (str1.length < str2.length) ? str1 : str2;

  return longString.slice(shortString.length,longString.length)
}
console.log(compareStrings("text education part 2","text education"));
