import TwoCrystalBalls from '@code/invested/other/TowCrystalBalls';

test('TwoCrystalBalls', () => {
  // array fill with false
  const data = new Array(10000).fill(false);
  // change to true from random idx
  let idx = Math.floor(Math.random() * 10000);
  for (let i = idx; i < 10000; i++) {
    data[i] = true;
  }

  expect(TwoCrystalBalls(data)).toEqual(idx);

  // random size array from 0 to 10000 filled with false (doesn't break)
  const data2 = new Array(Math.floor(Math.random() * 10000)).fill(false);
  expect(TwoCrystalBalls(data2)).toEqual(-1);
});
