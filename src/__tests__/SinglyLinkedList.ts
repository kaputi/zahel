import SinglyLinkedList from '@code/invested/dataStructures/SinglyLinkedList';
import { listTest } from './listTest';

test('SinglyLinkedList', () => {
  const list = new SinglyLinkedList<number>();
  listTest(list);
});
