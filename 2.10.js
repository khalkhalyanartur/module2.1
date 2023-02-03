/*
Написать функцию, которая вернет массив тех значений, которые есть в первом, но нет во втором массиве.
Input: ([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8])
Output: [2, 9, 3, 1]
*/
const arr1 = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const arr2 = [4, 5, 6, 7, 8];

const subtractArray = (array1, array2) => {
  const result = [];
  let no;
  
  for (let i = 0; i < array1.length; i++) {
    no = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        no = true;
        break;
      }
    }
    if (!no) {
      result.push(array1[i]);
    }
  }

  return result;
}

console.log(subtractArray(arr1, arr2));
