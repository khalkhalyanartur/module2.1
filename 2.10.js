/*
Написать функцию, которая вернет массив тех значений, 
которые есть в первом, но нет во втором массиве.
Input: ([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8])
Output: [2, 9, 3, 1]
*/
const arr1 = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const arr2 = [4, 5, 6, 7, 8];

const getUniqueElements = (array1, array2) => {
  const result = [];
  let isDuplicate;
  
  for (let i = 0; i < array1.length; i++) {
    isDuplicate = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(array1[i]);
    }
  }

  return result;
}

console.log(getUniqueElements(arr1, arr2));
