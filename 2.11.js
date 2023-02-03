/*Написать функцию, которая возвращает отсортированный массив уникальных значений.

Input: [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]
Output: [3, 7, 17]
*/

const arr = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

const sortUnique = (array) => {
  const result = [];
  let dublicate;
  
  for (let i = 0; i < array.length; i++) {
    dublicate = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i != j) {
        dublicate = true;
        break;
      }
    }
    if (!dublicate) {
      result.push(array[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp;
        temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      } 
    }
  }

  return result;
}

console.log(sortUnique(arr));