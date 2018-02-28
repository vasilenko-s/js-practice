/*
ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

    G -> C
    C -> G
    T -> A
    A -> U

dnaToRna.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
*/

// BEGIN (write your solution here)
const dnaToRna = (nukleotide) => {
  if (nukleotide === '') {
    return '';
  }
  let result = '';
  let i = 0;
  const len = length(nukleotide);
  // all nukleotide in quue
  while (i < len) {
    switch (nukleotide[i]) {
      case 'G':
        result = `${result}C`;
        break;
      case 'C':
        result = `${result}G`;
        break;
      case 'T':
        result = `${result}A`;
        break;
      case 'A':
        result = `${result}U`;
        break;
      default:
        return null;      
    }
    i+=1;
  } 
  return result;
};

export default dnaToRna;
// END
