/*
apply.js

Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:

    Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
    Функцию для применения
    Аргумент для применения

apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2
*/

// BEGIN (write your solution here)
const apply = (count, func, arg) => {
  if (count === 0) {
    return arg;
  }
  const iter = (iterCount, f, answerArg) => {
    let answer = f(answerArg);
    if (iterCount === 1) {
      return answer;
    }
    return iter(iterCount - 1, f, answer);
  }
  return iter(count, func, arg);
}

export default apply;
// END
