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
// BEGIN
const isPalindrome = (string) => {
  if (length(string) <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[length(string) - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = substr(string, 1, length(string) - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};

export default isPalindrome;
// END
