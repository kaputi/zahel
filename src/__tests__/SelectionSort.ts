import SelectionSort from '@code/invested/sorting/SelectionSort';

test('SelectionSort', () => {
  const arr = [9, 7, 3, 5, 69, 420, 42];
  SelectionSort(arr);
  expect(arr).toEqual([3, 5, 7, 9, 42, 69, 420]);
});
