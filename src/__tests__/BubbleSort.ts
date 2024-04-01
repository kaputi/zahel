import BubbleSort from '@code/invested/BubbleSort';

test('BubbleSort', () => {
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  BubbleSort(arr);
  expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});
