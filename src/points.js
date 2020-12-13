// @ts-check

// BEGIN (write your solution here)

const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

export default calculateDistance;
// END

/* points.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит
расстояние между двумя точкамина плоскости:

Примеры
point1 = [0, 0];
point2 = [3, 4];
calculateDistance(point1, point2); // 5 */
