/*
Отфильтровать коллекцию по нескольким полям. 
Функция параметрами принимает массив, первое значение - поле с которым равно, 
второе значение, больше которого другое поле. Например, в коллекции мне нужно 
вывести значения, в которых возраст больше 18, а страна 'RF'.

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

const filterArrayObject = (array, equalValue, moreValue) => {
  const withoutMore = [];
  const result = [];

  for(let i = 0; i < array.length; i++) {
    for(key in array[i]) {
      if(equalValue === array[i][key]) {
        withoutMore.push(array[i]);
        break;
      }
    }
  }

  for(let i = 0; i < withoutMore.length; i++) {
    for(let key in withoutMore[i]) {
      if (typeof moreValue === typeof withoutMore[i][key] && withoutMore[i][key] > moreValue ) {
        result.push(withoutMore[i]);
        break;
      }
    }
  }
  
return result;
}

console.log(filterArrayObject(arr, "RB", 18));