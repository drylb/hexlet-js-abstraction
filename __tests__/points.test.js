import calculateDistance from '../src/points';

test('point1', () => {
  const point1 = [0, 0];
  const point2 = [3, 4];
  expect(calculateDistance(point1, point2)).toBe(5);
});