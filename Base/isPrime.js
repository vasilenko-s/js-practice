//Реализуйте и экспортируйте по умолчанию функцию isPrime определяющую, является ли число простым.
// BEGIN (write your solution here)
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i+=1;
   } 
  return true;
}

export default isPrime;
// END

