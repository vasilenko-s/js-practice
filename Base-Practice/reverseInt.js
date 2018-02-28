/*
Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321

*/

import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const reverseInt = (num) => {
  let reverse = '';
  let numPozitiv = String(Math.abs(num));
  for (let i = length(numPozitiv) - 1; i >= 0; i -= 1) {
    reverse += numPozitiv[i];
  }
  return num > 0 ? Number(reverse) : -Number(reverse);
}

export default reverseInt;
// END
