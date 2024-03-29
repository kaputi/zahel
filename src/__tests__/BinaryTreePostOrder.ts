import PostOrderTraverse from '@code/invested/traverse/BinaryTreePostOrder';
import { tree } from './tree';

test('PostOrderTraverse', function () {
  expect(PostOrderTraverse(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});
