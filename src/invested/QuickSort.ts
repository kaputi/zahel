function qs(arr: number[], start: number, end: number): void {
  if (start >= end) return;

  const pivot = partition(arr, start, end);

  qs(arr, start, pivot - 1);
  qs(arr, pivot + 1, end);
}

function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];

  let idx = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }

  idx++;
  arr[end] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function QuickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
