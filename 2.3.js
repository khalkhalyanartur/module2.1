/*
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
Input: [4, 7, 1, 9, 6, 8, 4, 6, 3, 6]
Output: [4, 7, 1, 9, 6, 8, 3]
Input: ["text", "education", "part", "Text"]
Output: ["text", "education", "part"]
*/

const arrayText = ["TexT", "educatIon", "paRt", "Text"];
const arrayNum = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];

const removeDuplicates = (arr) => {
  const result = [];
  let dublicat;

  for (let i = 0; i < arr.length; i++) {
    dublicat = false;
    for (let j = 0; j < result.length; j++) {

      if (typeof arr[i] === 'string' && (arr[i] === result[j] || arr[i].toLowerCase() === result[j].toLowerCase())) {
        dublicat = true;
        break;
      }

      if (arr[i]===result[j]) {
        dublicat = true;
        break;
      }
    }

    if (!dublicat) {
    result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates(arrayNum));