/*
Напишите функцию, которая четное число возводит в квадрат, а нечетное - в куб. 
После умножает полученное значение на второй параметр. Затем прибавляет третий 
параметр и находит корень от получившегося результата, округленный до сотых. 
Но за счет того, что функция вызывает функцию.
Input: func (17)(6)(2)
Output: 171,69
*/
/*
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
*/


const  multyPulty = (a) => {
  let result;

  a % 2 === 0 ? result = a ** 2 : result = a ** 3;

  return (b) => {
    result = result * b;

    return (c) => {
      result += c;
      result **= 0.5;
      result = parseInt(result*100,10)/100;
      return result;
    }
  } 
}

console.log(multyPulty(17)(6)(2));
