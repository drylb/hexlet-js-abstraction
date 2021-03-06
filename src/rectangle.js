// @ts-check
// eslint-disable-next-line
import { makeDecartPoint, getX, getY, getQuadrant } from './rectanglePoints';

// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => ({ point, height, width });

const getStartPoint = (rectangle) => rectangle.point;

const getHeight = (rectangle) => rectangle.height;

const getWidth = (rectangle) => rectangle.width;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );
  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export { makeRectangle, containsOrigin };
// END

/* rectangle.js
Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого
всегда параллельны осям. Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке, достаточно знать только три параметра для однозначного задания
прямоугольника на плоскости: координаты левой верхней точки, ширину и высоту. Зная их,
мы всегда можем построить прямоугольник одним единственным способом.

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |
Основной интерфейс:

makeRectangle(point, width, height) (конструктор) – создает прямоугольник.
Принимает параметры: левую-верхнюю точку, ширину и высоту. Ширина и высота – положительные числа.

Селекторы getStartPoint(rectangle), getWidth(rectangle) и getHeight(rectangle)

containsOrigin(rectangle) – проверяет, принадлежит ли центр координат прямоугольнику
(не лежит на границе прямоугольника, а находится внутри). Чтобы в этом убедиться,

достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах
(их можно высчитать в момент проверки).
Экспортируйте функции makeRectangle(point, width, height) и containsOrigin(rectangle).

Примеры:

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

p = makeDecartPoint(0, 1);
rectangle = makeRectangle(p, 4, 5);

containsOrigin(rectangle); // false

rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
containsOrigin(rectangle2); // true
Подсказки
Квадрант плоскости — любая из 4 областей (углов), на которые плоскость делится
двумя взаимно перпендикулярными прямыми, принятыми в качестве осей координат.
 */
