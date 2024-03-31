import BreathFirstSearchGraphMatrix from '@code/invested/search/BFSGraphMatrix';
import { matrix2 } from './graph';

test('bfs - graph matrix', function () {
  expect(BreathFirstSearchGraphMatrix(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(BreathFirstSearchGraphMatrix(matrix2, 6, 0)).toEqual(null);
});
