/*
Дана строка. Нужно написать функцию, которая возвращает значение true, если строка является палиндромом, или false если нет.
Input: "testset"
Output: true
Input: "abbcsa"
Output: false
*/
const  text = "топот";

const isPolindrom = (string) => {
  let result = true;

  for (let i = 0; i < (string.length) / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      result = false;
      return result;
    }
  }
  
  return result;
}

console.log(isPolindrom(text));