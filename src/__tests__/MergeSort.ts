import MergeSort from '@code/invested/sorting/MergeSort';

test('MergeSort', () => {
  const arr = [9, 7, 3, 5, 69, 420, 42];
  const sorted = MergeSort(arr);
  expect(sorted).toEqual([3, 5, 7, 9, 42, 69, 420]);
});
