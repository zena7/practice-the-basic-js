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

  insertAt(index, value) {
    const newNode = new LinkedListNode(value);

    if (index < 0) {
      throw new RangeError("You entered a negative index value for insertion");
    }

    if (this.size < index) {
      throw new RangeError(
        "Index should be less than or equal to the list length."
      );
    }

    if (this.head === null || index === 0) {
      return this.prepend(value);
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (++count === index) {
        newNode.next = current.next;
        current.next = newNode;
      }

      current = current.next;
    }
    this.size += 1;

    return this;
  }

  find(value) {
    // if (this.head.data === value) {
    //   return this.head;
    // }

    let current = this.head;
    while (current) {
      if (current.data === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }
}
