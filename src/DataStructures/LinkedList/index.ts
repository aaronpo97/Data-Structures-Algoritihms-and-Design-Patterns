import ListNode from './ListNode';

export default class LinkedList {
  head: ListNode<unknown> | null = null;

  constructor() {
    this.head = null;
  }

  getSize(count = 0, node: ListNode<unknown> | null = this.head): number {
    return !node ? count : this.getSize(count + 1, node.next);
  }

  getAt(
    index: number,
    node: ListNode<unknown> | null = this.head,
    counter = 0,
  ): ListNode<unknown> | null {
    if (!node) {
      return null;
    }
    if (counter === index) {
      return node;
    }

    return this.getAt(index, node.next, counter + 1);
  }

  insertAt<DataType>(data: DataType, index: number) {
    if (!this.head) {
      this.head = new ListNode(data);
      return;
    }
    if (index === 0) {
      this.head = new ListNode(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast()!;
    previous.next = new ListNode(data, previous.next);
  }

  removeAt(index: number) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }

    const previousNode = this.getAt(index - 1);
    if (!previousNode?.next) {
      return;
    }

    previousNode.next = previousNode.next.next;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.getSize() - 1);
  }

  insertFirst<DataType>(data: DataType) {
    return this.insertAt(data, 0);
  }

  insertLast<DataType>(data: DataType) {
    return this.insertAt(data, this.getSize() - 1);
  }

  removeFirst() {
    return this.removeAt(0);
  }

  removeLast() {
    return this.removeAt(this.getSize());
  }

  clear() {
    this.head = null;
  }
}
