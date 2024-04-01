import InsertionSort from '@code/invested/InsertionSort';

test('InsertionSort', () => {
  const arr = [9, 3, 7, 5, 69, 420, 42];
  InsertionSort(arr);
  expect(arr).toEqual([3, 5, 7, 9, 42, 69, 420]);
});
