function merge(left: number[], right: number[]): number[] {
  let arr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default function MergeSort(arr: number[]): number[] {
  const mid = Math.floor(arr.length / 2);

  if (arr.length < 2) return arr;

  const left = arr.splice(0, mid);

  const a = merge(MergeSort(left), MergeSort(arr));

  return a;
}
