/*
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
isHappyTicket.js

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как в числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
*/

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const isHappyTicket = (num) => {
  const sumStr = (strThree) => {
    let sum = 0;
    for (let i = 0; i < length(strThree); i += 1) {
      sum += Number(strThree[i]);
    }
    return sum;
  }
  if (sumStr(substr(String(num), 0, 3)) === sumStr(substr(String(num), 3, 3))) {
    return true;
  } else {
    return false;
  }
};

export default isHappyTicket;
// END
