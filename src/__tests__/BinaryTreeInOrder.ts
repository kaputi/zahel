import InOrderTraverse from '@code/invested/traverse/BinaryTreeInOrder';
import { tree } from './tree';

test('InOrderTraverse', function () {
  expect(InOrderTraverse(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
