//Экспортируйте функцию по умолчанию, которая находит наибольший общий делитель двух целых положительных чисел.

// BEGIN (write your solution here)
const gcd = (n, m) => {
   let maxDiv = n;
   if (n > m) {
    maxDiv = m; 
    }  
    console.log('!!!!', maxDiv);   
    while ((n % maxDiv !== 0) || (m % maxDiv !== 0)) {
      maxDiv--;
      console.log('!!!!', maxDiv);
    }
    return maxDiv;
};
export default gcd;
// END

