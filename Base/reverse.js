/*

Реализуйте и экспортируйте по умолчанию функцию reverse, которая переворачивает строку.

Пример:

reverse('hello, world!'); // !dlrow ,olleh


*/


import { length } from './strings';

// BEGIN (write your solution here)
const reverse = (str) => {
let result = '';
for (let i = length(str) - 1; i >= 0; i-=1) {
  result = result + str[i]; 
}
return result;
};

export default reverse;
// END
