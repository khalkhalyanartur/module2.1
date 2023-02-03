/*
Напишите функцию, которая четное число возводит в квадрат, а нечетное - в куб. 
После умножает полученное значение на второй параметр. Затем прибавляет третий параметр и находит корень от получившегося результата, округленный до сотых. Но за счет того, что функция вызывает функцию.
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

const curry = (f) => a => b => c => f( a, b, c);

const  multyPulty = (a, b, c) => {
  let result;

  if (a % 2 == 0) {
    result = a * a; 
  } else result = a * a * a;

  result = result * b;
  result = result + c;
  result = Math.sqrt(result);
  result =  result.toFixed(2);

  return result;
}

const callCurry = curry(multyPulty);
console.log(callCurry(17)(6)(2));
//в Output ошибка в 1 сотую



