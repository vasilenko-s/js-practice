/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
*/


// BEGIN
export default (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;

  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};
// END
