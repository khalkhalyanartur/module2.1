/*
Дана строка. Напишите функцию, которая разделит строку на фрагменты по три подряд идущих символа. 
В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента, например, нижнее подчеркивание (_). 
Показать фрагменты, упорядоченные по алфавиту.
Input: "test education part 2"
Output: ["a_i", "d_c", "o_ ", "p_r", "t_2", "t_e", "t_s"]
*/

const text = "test education part 2";

const splitString = (str) => {
  let strArray = [];
  let randomChar;

  for (let i = 0; i < str.length; i+=3 ) {
    strArray.push(str.slice(i,i+3));
  }

    randomChar = '_';
    
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].replace(strArray[i][1], randomChar);
  }

  for (let i = 0; i < strArray.length; i++) {
    //console.log(strArray[i]);
    for (let j = i+1; j < strArray.length; j++) {
      //console.log(" ", strArray[j]);
      if (strArray[i] > strArray[j]) {
        let temp;
        temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
        //console.log(i," = ",strArray[i]);
        //console.log(j," = ",strArray[j]);
      } 
    }
  }

  return strArray; 
}

console.log(splitString(text));
