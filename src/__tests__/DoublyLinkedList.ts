import DoublyLinkedList from '@code/invested/DoublyLinkedList';
import { listTest } from '@code/listTest';

test('DoublyLinkedList', () => {
  const list = new DoublyLinkedList<number>();
  listTest(list);
});
