import SinglyLinkedList from '@code/invested/SinglyLinkedList';
import { listTest } from '@code/listTest';

test('SinglyLinkedList', () => {
  const list = new SinglyLinkedList<number>();
  listTest(list);
});
