import PreOrderTraverse from '@code/invested/traverse/BinaryTreePreOrder';
import { tree } from './tree';

test('PreOrderTraverse', function () {
  expect(PreOrderTraverse(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
