// @ts-check

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

// BEGIN (write your solution here)

// VERSION 1;

/* const makeRational = (num, den) => {
  const gcd = getGcd(num, den);
  const numer = num % gcd === 0 ? num / gcd : num;
  const denom = den % gcd === 0 ? den / gcd : den;
  const rat = { numer, denom };
  return rat;
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
  if (getDenom(rat1) !== getDenom(rat2)) {
    const commonDenom = (getDenom(rat1) * getDenom(rat2));
    const commonNumer = (getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1));
    return makeRational(commonNumer, commonDenom);
  }
  const summOfNumer = getNumer(rat1) + getNumer(rat2);
  return { numer: summOfNumer, denom: getDenom(rat1) };
};

const sub = (rat1, rat2) => {
  if (getDenom(rat1) !== getDenom(rat2)) {
    const commonDenom = (getDenom(rat1) * getDenom(rat2));
    const commonNumer = (getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1));
    return makeRational(commonNumer, commonDenom);
  }
  const subOfNumer = getNumer(rat1) - getNumer(rat2);
  if (Math.abs(subOfNumer) > getDenom(rat1)) {
    return makeRational(subOfNumer, getDenom(rat1));
  }
  return { numer: subOfNumer, denom: getDenom(rat1) };
}; */

// VERSION 2 (refactoring);
const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  ));

const sub = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  ));
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};

/*
rational.js
Реализуйте абстракцию для работы с рациональными числами включающую в себя следующие функции:

Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь.
Селектор getNumer() - возвращает числитель
Селектор getDenom() - возвращает знаменатель
Сложение add() - складывает переданные дроби
Вычитание sub() - находит разность между двумя дробями
Не забудьте реализовать нормализацию дробей удобным для вас способом.

const rat1 = makeRational(3, 9);
getNumer(rat1); // 1
getDenom(rat1); // 3

const rat2 = makeRational(10, 3);

const rat3 = add(rat1, rat2);
ratToString(rat3); // '11/3'

const rat4 = sub(rat1, rat2);
ratToString(rat4); // '-3/1'
Подсказки
Действия с дробями
Функция getGcd() находит наибольший общий делитель двух чисел (уже импортирована в модуль)
Функция ratToString() возвращает строковое представление числа (используется для отладки) */
