/*
Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.
isPalindrome.js

Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:

import isPalindrome from './isPalindrome';

isPalindrome('radar'); // => true
isPalindrome('a');     // => true
isPalindrome('abs');   // => false

*/
import { length, substr } from './strings';

// BEGIN (write your solution here)
const isPalindrome = (word) => {
  const len = length(word);
  //guard expression
  if (len < 2) {
    return true;
  }
  if (word[0] !== word[len-1]) {
    return false;
  } else {
    return isPalindrome(substr(word, 1, len-2));
  }
};

export default isPalindrome;
// END

