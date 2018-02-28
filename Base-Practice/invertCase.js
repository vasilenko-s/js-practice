/*
Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!') // hELLO, wORLD!
invertCase('I loVe JS') // i LOvE js

*/

import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i+=1) {
    str[i] === toUpperCase(str[i]) ? result+=toLowerCase(str[i]) : result += toUpperCase(str[i]); 
  }
  return result;
};

export default invertCase;
// END
