declare type Point = {
  x: number;
  y: number;
};

declare type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
  prev?: ListNode<T>;
};

declare interface List<T> {
  get length(): number;
  removeAt(idx: number): T | undefined;
  remove(item: T): T | undefined;
  get(idx: number): T | undefined;
  prepend(item: T): void;
  append(item: T): void;
  insertAt(item: T, idx: number): void;
}
