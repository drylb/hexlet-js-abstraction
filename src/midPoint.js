// @ts-check

// BEGIN (write your solution here)

const getMidpoint = (point1, point2) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;
  const pointX = (x1 + x2) / 2;
  const pointY = (y1 + y2) / 2;
  return { x: pointX, y: pointY };
};

export default getMidpoint;
// END

/* points.js
Реализуйте и экспортируйте по умолчанию функцию,
которая находит точкупо середине между двумяуказанными точками.

Примеры
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); //=> { x: 2, y: 2 };

Подсказки
Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

*/
