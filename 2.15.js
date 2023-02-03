/*
Реализуйте функцию, которая параметрами принимает два объекта и возвращает сообщение равны ли эти два объекта.
Input:
const a = { test: 8, text: 9 };
const b = { test: 8, text: 9 };
func(a, b)
Output: true
*/

const a = { test: 8, text: 9 };
const b = { test: 8, text: 9 };

const equalObject = (obj1,obj2) => {
  let equal;

  for(let key in obj1) {
    equal = false;
    for(let key2 in obj2) {
      if (obj1[key] === obj2[key2] && key === key2) equal = true;
    }
    if (!equal) return false;
  }

  return true;
}

console.log(equalObject(a,b));