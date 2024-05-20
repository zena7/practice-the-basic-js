export class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  toString() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array.join(", ");
  }

  append(data) {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;

    return this;
  }

  prepend(data) {
    const newNode = new LinkedListNode(data, this.head);

    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.size += 1;

    return this;
  }

  delete(value) {
    let deletedNode = null;
    const isEqualTargetValue = (item, targetValue) => item === targetValue;

    if (isEqualTargetValue(this.head.data, value)) {
      deletedNode = this.head;
      this.head = deletedNode.next;

      if (this.head === null) {
        this.tail = null;
      }
      this.size -= 1;
    } else {
      let current = this.head;

      while (current.next) {
        if (isEqualTargetValue(current.next.data, value)) {
          deletedNode = current.next;
          current.next = deletedNode.next;
          if (!current.next) {
            this.tail = current;
          }
          this.size -= 1;
          break;
        }
        current = current.next;
      }
    }

    return deletedNode;
  }
}
