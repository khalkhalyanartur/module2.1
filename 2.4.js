/*
Напишите функцию range(), принимающую два аргумента: начало и конец диапазона. 
Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное. 
Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.
Input: range(5, 2, -1)
Output: [5, 4, 3, 2]

Input: range(4, 16, 2)
Output: [4, 6, 8, 10, 12, 14, 16]
*/

const range = (start, end, step = 1) => {
  const result = []; 

  if ((start > end) && step > 0) {
    step = step * -1;
  }

  if (start < end && step >= 0) {
    for (let i = start; i <= end; i = i + step) result.push(i);
  } else {
    for (let i = start; i >= end; i = i + step) result.push(i);
  }

  return result;

}

console.log(range(20, 1, -2));
