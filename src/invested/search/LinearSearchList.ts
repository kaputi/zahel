export default function <T>(arr: T[], find: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) return i;
  }
  return -1;
}
