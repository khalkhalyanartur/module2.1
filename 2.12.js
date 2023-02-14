/*
Реализуйте функцию, которая принимает на вход объект типа { "dog": 6, "cat": 11 } и возвращает массив пар.
Input: { "dog": 6, "cat": 11 }
Output: [ ["dog", 6], ["cat", 11] ]
*/

const convertObjectToArray = (obj) => {
  const result = [];
  let count = 0;
  
  for (let key in obj) {
    result[count] = [key, obj[key]];
    count++;
  }

  return result;
} 

console.log(convertObjectToArray({ "dog": 6, "cat": 11 }));