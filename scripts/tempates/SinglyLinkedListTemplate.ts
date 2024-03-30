export default {
  // TODO:
  description: '',
  ts: `
export default class SinglyLinkedList<T> {
  constructor() {}

  // Add item at beginning of list
  prepend(item: T): void {}

  // Add item at end of list
  append(item: T): void {}

  // Add item at index
  insertAt(item: T, idx: number): void {}

  // Remove first item with value
  remove(item: T): T | undefined {}

  // Remove item at index
  removeAt(idx: number): T | undefined {}

  // Return value of item at index
  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }
}
`,
  // TODO:
  go: ``,
};
