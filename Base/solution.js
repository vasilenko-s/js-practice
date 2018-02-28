/*
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!

*/

import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
 const solution = (str) => {
 let result = '';
 for (let i=0; i < length(str); i+=1) {
   if ((i === 0) || (str[i-1]===' ')) {
    // console.log(str[i]);
     result += toUpperCase(str[i]);
   } else {
     result+=str[i];
   }
 } 
 return result;
 };

 export default solution;
// END
