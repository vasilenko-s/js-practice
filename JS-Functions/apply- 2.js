/*
apply.js

Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:

    Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
    Функцию для применения
    Аргумент для применения

apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2
*/

// BEGIN
const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

export default apply;
// END