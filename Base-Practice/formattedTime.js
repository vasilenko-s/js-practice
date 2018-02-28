/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
*/


// BEGIN (write your solution here)
export default (num) => {
  let timeStr = '';
  let numHours = Math.floor(num / 60);
  let numMin = num % 60;
  const twoNumber = (num) => {
  let result = '';
  if (num < 10) {
    result = '0' + num;
  } else {
    result = String(num);
  }
  return result;
  };
  timeStr = twoNumber(numHours) + ':' + twoNumber(numMin);
  return timeStr;
};
// END
