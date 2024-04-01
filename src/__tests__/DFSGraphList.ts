import { list2 } from '@code/graph';
import DepthFirstSearchGraphList from '@code/invested/DFSGraphList';

test('dfs - graph', function () {
  expect(DepthFirstSearchGraphList(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(DepthFirstSearchGraphList(list2, 6, 0)).toEqual(null);
});
