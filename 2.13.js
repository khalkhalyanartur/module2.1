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

obj = {
  name: "test",
  age: 25,
  weight: 65,
  height: 165
}

const multiplyBy2 = (object) => {
  for (let key in object) {
    if (typeof obj[key]  === 'number') {
      object[key]*=2;
    }
  }

  return object
}

console.log(multiplyBy2(obj));
