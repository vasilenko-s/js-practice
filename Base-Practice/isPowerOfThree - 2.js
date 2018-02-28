/*
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).
*/
// BEGIN
const isPowerOfThree = (num) => {
  let current = 1;
//перебирать все степени тройки и сравнивать
  while (current <= num) {
    if (current === num) {
      return true;
    }
    current *= 3;
  }

  return false;
};

export default isPowerOfThree;
// END
