import QuickSort from '@code/invested/sorting/QuickSort';

test('QuickSort', () => {
  const arr = [9, 3, 7, 5, 69, 420, 42];
  QuickSort(arr);
  expect(arr).toEqual([3, 5, 7, 9, 42, 69, 420]);
});
