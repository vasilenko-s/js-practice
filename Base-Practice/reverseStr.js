/*
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str'); // rts
reverse('hexlet'); // telxeh

Попробуйте решить эту задачу используя рекурсивный процесс.
*/

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)

const reverse = (str) => {
  if (str === '') {
    return str;
  }
  // вычисление последнего символа 
  let newStr = str[length(str)-1];
  
  return  newStr + reverse(substr(str, 0, length(str)-1));
  
};

export default reverse; 
// END
