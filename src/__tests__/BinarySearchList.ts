import BinarySearchList from '@code/invested/search/BinarySearchList';

test('BinarySearchList', () => {
  const list = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(BinarySearchList(list, 69)).toEqual(true);
  expect(BinarySearchList(list, 1336)).toEqual(false);
  expect(BinarySearchList(list, 69420)).toEqual(true);
  expect(BinarySearchList(list, 69421)).toEqual(false);
  expect(BinarySearchList(list, 1)).toEqual(true);
  expect(BinarySearchList(list, 0)).toEqual(false);
});
