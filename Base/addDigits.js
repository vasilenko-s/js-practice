/*
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

*/

import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)

const addDigits = (num) => {
  let result = num;
  while (length(String(result)) !== 1) {
    result = sumDigits(result);
    }
  return Number(result);
};


const sumDigits = (num) => {
let s = 0;
let str = String (num);
for (let i = 0; i < length(str); i+=1) {
  s += Number(str[i]);
}
return s;
};

export default addDigits;
// END
