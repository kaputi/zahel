export default function SelectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let min = i;
      if (arr[j] < arr[min]) min = j;
      if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}
