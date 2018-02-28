/*
Программист, который работал на проекте до вас, разбросал все функции, связанные с математическими вычислениями по разным файлам с именами numbers1, numbers2 и numbers3. Причем имена функций тоже сделал странными: все функции в файле numbers2 заканчиваются на двойку, например, sum2.

Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним (говорят "фасад"). Для этого необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.
math.js

Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и выставил их наружу под следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал функцию cube по умолчанию.

В этом задании специально не сказано, где какая функция и под каким именем лежит. А так же не сказано, как они все экспортируются. Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей, что очень упростит вашу жизнь в дальнейшем. Огромная просьба не подсматривать решение и подумать самостоятельно, а в случае чего задать вопрос в комьюнити.
*/

// BEGIN (write your solution here)
import cube from './numbers1.js';
import multi, {pow2 as pow, sum2 as sum, sub2 as sub} from './numbers2.js';
import sqrt from './numbers3.js';

export {cube as default, multi, sqrt, pow, sum, sub};
// END
