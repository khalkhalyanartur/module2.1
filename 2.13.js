/*
Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.
Input: {
  name: "test",
  age: 25,
  weight: 65,
  height: 165
}
Output: {
  name: "test",
  age: 50,
  weight: 130,
  height: 330
}
*/

const obj = {
  name: "test",
  age: '25',
  weight: 65,
  height: 165
}

const multiplyByTwo = (object) => {
  for (let key in object) {
    if (typeof obj[key]  === 'number' || !isNaN(Number(obj[key])) ) {
      object[key]=Number(object[key]) * 2;
    }
  }

  return object;
}

console.log(multiplyByTwo(obj));
