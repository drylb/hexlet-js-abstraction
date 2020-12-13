/* eslint-disable no-undef */
import getMidpoint from '../src/midPoint';

test('midPoint1', () => {
  const point1 = { x: 0, y: 0 };
  const point2 = { x: 4, y: 4 };
  expect(getMidpoint(point1, point2)).toStrictEqual({ x: 2, y: 2 });
});

test('midPoint2', () => {
  const point1 = { x: -1, y: 10 };
  const point2 = { x: 0, y: -3 };
  expect(getMidpoint(point1, point2)).toStrictEqual({ x: -0.5, y: 3.5 });
});
