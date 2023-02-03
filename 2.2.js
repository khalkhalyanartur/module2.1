/*
В функцию передается несколько массивов. 
Из первого массива, переданного в функцию, вывести элементы, которые имеются во всех других массивах, переданных в функцию.
Input: ([3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 4], [6, 3, 2, 8, 1])
Output: [1]
*/

const searchRepeat = (...arguments) => {
  let result = [];
  let countArray = 0;

  //searchRepeat([3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 4], [6, 3, 2, 8, 1])
  for (let i = 0; i < arguments[0].length; i++) {
    countArray = 0;
    console.log(arguments[0][i]);
    
    for (let j = 1; j < arguments.length; j++) {
      for (let k = 0; k < arguments[j].length; k++) {
        console.log(" ",arguments[j][k]);
        if (arguments[0][i] == arguments[j][k]) {
          console.log("da");
          countArray ++;
          break;
        }
      }
    }
    if (countArray == (arguments.length-1)) {
      result.push(arguments[0][i]);
    }
  }
  return result

}

console.log(searchRepeat([3, 6, 1, 8, 3, 6, 3, 6, 3, 6, 4], [ 8, 3, 2, 4], [6, 3, 2, 8]));
