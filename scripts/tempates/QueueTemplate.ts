export default {
  description: 'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)',
  ts: `
export default class Queue<T> {
  constructor() {}

  // Adds item at end of queue
  enqueue(item: T): void {}

  // Removes First item from queue
  deque(): T | undefined {}

  // Returns value of first item in queue
  peek(): T | undefined {}
}
`,
  // TODO:
  go: ``,
};
