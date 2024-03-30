export default class SinglyLinkedList<T> {
  public length: number;

  private head?: ListNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  prepend(item: T): void {
    this.length++;
    const newNode: ListNode<T> = { value: item, next: this.head };
    this.head = newNode;
  }

  append(item: T): void {
    this.length++;
    const newNode: ListNode<T> = { value: item };

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let lastNode: ListNode<T> = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    lastNode.next = newNode;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) throw new Error('oh no');

    if (idx === 0) {
      this.prepend(item);
      return;
    } else if (idx === this.length) {
      this.append(item);
      return;
    }

    this.length++;

    const newNode: ListNode<T> = { value: item };
    const oneBefore = this.getAt(idx - 1);
    if (!oneBefore) return;
    newNode.next = oneBefore.next;
    oneBefore.next = newNode;
  }

  remove(item: T): T | undefined {
    if (this.length < 1) return;
    let curr = this.head;
    if (curr && curr.value === item) {
      const value = curr.value;
      this.length--;
      this.head = curr.next;
      return value;
    }

    let prev;

    for (let i = 0; curr && i < this.length; i++) {
      prev = curr;
      if (curr.value === item) break;
      curr = curr.next;
    }

    if (!curr || !prev) return;

    this.length--;
    prev.next = curr.next;
    return curr.value;
  }

  removeAt(idx: number): T | undefined {
    if (this.length < 1) return;

    if (idx === 0 && this.head) {
      this.length--;
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }

    let curr = this.head;
    if (!curr) return;
    let prev;

    for (let i = 0; i < idx; i++) {
      prev = curr;
      if (curr.next) curr = curr.next;
    }
    if (!prev || !curr || prev === curr) return;

    this.length--;
    prev.next = curr.next;

    return curr.value;
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  private getAt(idx: number): ListNode<T> | undefined {
    if (!this.head || idx > this.length) return;

    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      if (!curr.next) return;
      curr = curr.next;
    }

    return curr;
  }
}
