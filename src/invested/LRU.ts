export default class LRU<K, V> {
  private length: number = 0;
  private head?: ListNode<V>;
  private tail?: ListNode<V>;

  // private reverseLookup: Map<ListNode<V>, K> = new Map<ListNode<V>, K>();
  // private loopup: Map<K, ListNode<V>> = new Map<K, ListNode<V>>();

  private reverseLookup: Map<ListNode<V>, K> = new Map();
  private lookup: Map<K, ListNode<V>> = new Map();

  constructor(private capacity: number) {}

  update(key: K, value: V): void {
    // does it exist
    let node = this.lookup.get(key);
    if (!node) {
      // if it doesn't exist insert (check capacity and evict if over)
      node = { value };
      this.length++;
      this.prepend(node);
      this.trimCache();
      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      // if it does exist, move to front and update value
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // check cahce for existance
    const node = this.lookup.get(key);
    if (!node) return undefined;
    // update the value we found and move to front
    this.detach(node);
    this.prepend(node);

    // return out the voulue found or undefined
    return node.value;
  }

  private detach(node: ListNode<V>): void {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (this.head === node) this.head = this.head.next;
    if (this.tail === node) this.tail = this.tail.prev;

    node.prev = undefined;
    node.next = undefined;
  }

  private prepend(node: ListNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) return;

    const tail = this.tail as ListNode<V>;
    this.detach(tail);

    const key = this.reverseLookup.get(tail) as K;

    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
