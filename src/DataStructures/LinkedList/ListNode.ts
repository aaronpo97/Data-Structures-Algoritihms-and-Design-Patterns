export default class ListNode<T> {
  data: T;

  // eslint-disable-next-line no-use-before-define
  next: ListNode<unknown> | null;

  constructor(data: T, next: ListNode<unknown> | null = null) {
    this.data = data;
    this.next = next;
  }
}
