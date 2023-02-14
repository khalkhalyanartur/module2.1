/*
Отфильтровать коллекцию по нескольким полям. 
Функция параметрами принимает массив, первое значение - поле с которым равно, 
второе значение, больше которого другое поле. Например, в коллекции мне нужно вывести значения, в которых возраст больше 18, а страна 'RF'.

Input: const arr = [
  {name: "test", age: 34, country: "RF"},
  {name: "test2", age: 12, country: "RF"},
  {name: "test1", age: 54, country: "RF"}
];
Output: [
  {name: "test", age: 34, country: "RF"},
  {name: "test1", age: 54, country: "RF"}
]
Пример вызова функции: func(array, "RF", 18)
*/

const arr = [
  {name: "test", age: 4, country: "RF"},
  {name: "test2", age: 12, country: "R"},
  {name: "test1", age: 54, country: "RF"},
  {name: "test1", age: 54, country: "RB"}
];

const filterArr = (array, equal, more) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
      
          if (array[i]['country'] === equal && array[i]['age'] > more) {
              result.push(array[i])
          }   
  }

return result;
}

console.log(filterArr(arr, "R", 10));