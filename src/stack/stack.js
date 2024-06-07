import { LinkedList } from "../linked-list/linked-list";

export class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  push(data) {
    this.stack.prepend(data);

    return this;
  }

  pop() {
    if (this.isEmpty()) return null;

    let deletedItem = this.stack.head.data;
    this.stack.head = this.stack.head.next;
    this.stack.size -= 1;

    return deletedItem;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.stack.head.data;
  }

  isEmpty() {
    return this.stack.size === 0;
  }

  getSize() {
    return this.stack.size;
  }

  toString() {
    return this.stack.toString();
  }
}
