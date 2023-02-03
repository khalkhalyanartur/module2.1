/*
Написать функцию, которая удалит из массива значения, индексы которых указаны во втором массиве.
Input: ([5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1])
Output: [5, 6, 1, 3, 6, 3, 7, 1]
*/

const delIndex = (array, indexArray) => {
  const result = [];
  let isDel;
  
  for (let i = 0; i < array.length; i++) {
    isDel = false;
    for (let j = 0; j < indexArray.length; j++) {
      if (i === indexArray[j]) {
        isDel = true;
      }
    }

    if (!isDel) {
      result.push(array[i])
    }
  }

  return result;
}

console.log(delIndex([1,2,3,4,5],[0,1]));