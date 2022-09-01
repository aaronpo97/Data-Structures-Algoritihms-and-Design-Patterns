/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';
import LinkedList from '.';
import ListNode from './ListNode';

test('List is a class', () => {
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('List node is a class', () => {
  expect(typeof ListNode.prototype.constructor).toEqual('function');
});

describe('Insert first', () => {
  test('Method inserts a node to start of linked list', () => {
    const list = new LinkedList();
    list.insertFirst(1);
    expect(list.head!.data).toEqual(1);
    list.insertFirst(2);
    expect(list.head!.data).toEqual(2);
  });
});

describe('Get size', () => {
  test('Method gets the size of the linked list', () => {
    const list = new LinkedList();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.getSize()).toEqual(3);
  });
});

describe('Get first', () => {
  test('Method returns the first element in the list', () => {
    const l = new LinkedList();

    l.insertFirst(1);
    expect(l.getFirst()?.data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst()?.data).toEqual(2);
  });
});

describe('Get last', () => {
  test('Method returns the last element in the list', () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(2);
    expect(linkedList.getLast()).toEqual({ data: 2, next: null });
    linkedList.insertFirst(1);
    expect(linkedList.getLast()).toEqual({ data: 2, next: null });
  });
});

describe('Clear', () => {
  test('Method properly clears the list', () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst('Hello');
    linkedList.insertFirst('world!');

    expect(linkedList.getSize()).toEqual(2);

    linkedList.clear();
    expect(linkedList.getSize()).toEqual(0);
  });
});
