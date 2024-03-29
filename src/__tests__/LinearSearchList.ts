import LinearSearchList from '@code/invested/search/LinearSearchList';

test('LinearSearchList', () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(LinearSearchList(foo, 69)).toEqual(3);
  expect(LinearSearchList(foo, 1336)).toEqual(-1);
  expect(LinearSearchList(foo, 69420)).toEqual(10);
  expect(LinearSearchList(foo, 69421)).toEqual(-1);
  expect(LinearSearchList(foo, 1)).toEqual(0);
  expect(LinearSearchList(foo, 0)).toEqual(-1);
});
