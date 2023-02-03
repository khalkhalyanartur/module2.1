/*
Даны две строки. Написать функцию сравнения этих строк. 
Вывести символы большей строки, на количество которых отличается.
Input: ("text education part 2", "text education")
Output: " part 2"
*/

const compare = (str1, str2) => {
  const long = (str1.length > str2.length) ? str1 : str2;
  const short = (str1.length < str2.length) ? str1 : str2;

  return long.slice(short.length,long.length)
}
console.log(compare("text education part 2","text education"));
