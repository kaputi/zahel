export default function BinarySearchList(arr: number[], item: number): boolean {
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (arr[m] === item) return true;
    if (arr[m] > item) hi = m;
    if (arr[m] < item) lo = m + 1;
  }

  return false;
}
