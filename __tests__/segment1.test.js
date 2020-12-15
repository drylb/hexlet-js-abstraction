/* eslint-disable no-undef */
// @ts-check

import { makeDecartPoint } from '../src/points1';
import { makeSegment, isParallelWithY, isParallelWithX } from '../src/segment1';

test('segment', () => {
  const point1 = makeDecartPoint(3, 2);
  const point2 = makeDecartPoint(0, 0);
  const point3 = makeDecartPoint(3, -5);
  const point4 = makeDecartPoint(10, 2);
  const point5 = makeDecartPoint(3, 4);
  const point6 = makeDecartPoint(3, 8);
  expect(isParallelWithY(makeSegment(point1, point2))).toBe(false);
  expect(isParallelWithY(makeSegment(point1, point3))).toBe(true);
  expect(isParallelWithX(makeSegment(point1, point4))).toBe(true);
  expect(isParallelWithY(makeSegment(point5, point6))).toBe(true);
  expect(isParallelWithX(makeSegment(point2, point3))).toBe(false);
});
