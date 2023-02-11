/*
Дана строка. Напишите функцию, которая разделит строку на фрагменты по три подряд идущих символа. 
В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента, например, нижнее подчеркивание (_). 
Показать фрагменты, упорядоченные по алфавиту.
Input: "test education part 2"
Output: ["a_i", "d_c", "o_ ", "p_r", "t_2", "t_e", "t_s"]
*/

const text = "test education part 2";

const splitString = (str) => {
  const strArray = [];
  const result = [];
  const randomChar = '_';

  for (let i = 0; i < str.length; i += 3 ) {
    strArray.push(str.slice(i,i + 3));
  }

  for (let i = 0; i < strArray.length; i++) {
    result.push(strArray[i][0] + randomChar + strArray[i][2]); 
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      } 
    }
  }

  return result;
}

console.log(splitString(text));