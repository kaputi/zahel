import DoublyLinkedList from '@code/invested/dataStructures/DoublyLinkedList';
import { listTest } from './listTest';

test('DoublyLinkedList', () => {
  const list = new DoublyLinkedList<number>();
  listTest(list);
});
