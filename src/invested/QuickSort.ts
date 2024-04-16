function qs(arr: number[], start: number, end: number): void {
  if (start >= end) return;

  // pvivot index
  const pIdx = partition(arr, start, end);

  qs(arr, start, pIdx - 1);
  qs(arr, pIdx + 1, end);
}

function partition(arr: number[], start: number, end: number): number {
  // pivot value
  const pVal = arr[end];
  // pivot index
  let pIdx = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pVal) {
      pIdx++;
      if (pIdx != i) [arr[i], arr[pIdx]] = [arr[pIdx], arr[i]];
    }
  }

  pIdx++;
  arr[end] = arr[pIdx];
  arr[pIdx] = pVal;

  return pIdx;
}

export default function QuickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
