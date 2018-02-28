/*
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).
*/
// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
  for (let i = 0; i<=num; i += 1) {
    if (3**i === num) {
      return true;
    } 
  } 
  return false;
};

export default isPowerOfThree;
// END
