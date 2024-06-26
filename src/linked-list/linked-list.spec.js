import { beforeEach, describe, expect, test } from "vitest";
import { LinkedList, LinkedListNode } from "./linked-list";

// test.todo => skipped test

function createLinkedListWithSeveralNodes() {
  const linkedList = new LinkedList();
  return linkedList.append(1).append(2).append(3);
}

describe("LinkedListNode", () => {
  test("create an empty node", () => {
    // Arrange
    const expectedData = 1;

    // Act
    const node = new LinkedListNode(expectedData);

    // Assert
    expect(node.data).toBe(expectedData);
    expect(node.next).toBeNull();
  });
});

describe("LinkedList", () => {
  let linkedList = null;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test("creates an empty list", () => {
    // Assert
    expect(linkedList).toBeDefined();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  describe("append", () => {
    test("appends new node to an empty list", () => {
      // Arrange
      const expectedData = 1;

      // Act
      linkedList.append(expectedData);

      // Assert
      expect(linkedList.head.data).toBe(expectedData);
      expect(linkedList.head).toEqual(linkedList.tail);
      expect(linkedList.size).toBe(1);
    });

    test("appends new node at the end of a list", () => {
      // Arrange
      linkedList.append(1);
      const expectedData = 2;

      // Act
      linkedList.append(2);

      expect(linkedList.head.next).toBe(linkedList.tail);
      expect(linkedList.tail.data).toBe(expectedData);
      expect(linkedList.size).toBe(2);
    });
  });

  describe("prepend", () => {
    test("prepends new node to an empty list", () => {
      // Arrange
      const expectedData = 1;

      // Act
      linkedList.prepend(expectedData);

      // Assert
      expect(linkedList.head.data).toBe(expectedData);
      expect(linkedList.head).toEqual(linkedList.tail);
      expect(linkedList.size).toBe(1);
    });

    // test.todo("prepends new node to the beginning of a list");
    test("prepends new node to the beginning of a list", () => {
      linkedList.prepend(1);
      const expectedData = 2;

      linkedList.prepend(expectedData);

      expect(linkedList.head.data).toBe(expectedData);
      expect(linkedList.head.next).toEqual(linkedList.tail);
      expect(linkedList.size).toBe(2);
    });
    test("prepends new node to the beginning of a list with several nodes", () => {
      linkedList.prepend(1).prepend(2).prepend(3);
      const expectedData = 4;
      linkedList.prepend(expectedData);

      expect(linkedList.head.data).toBe(expectedData);
      expect(linkedList.tail.next).toBeNull();
      expect(linkedList.head.next.data).toBe(3);
    });
  });

  describe("delete", () => {
    test("удалить ноду из связного списка с одной нодой", () => {
      // Arrange
      linkedList.append(1);

      // Act
      let deletedNode = linkedList.delete(1);

      // Assert
      expect(deletedNode.data).toBe(1);
      expect(linkedList.size).toBe(0);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
    });

    test("удалить первую ноду из связного списка из двух нод", () => {
      // Arrange
      linkedList.append(1).append(2);

      // Act
      let deletedNode = linkedList.delete(1);

      // Assert

      expect(linkedList.size).toBe(1);
      expect(deletedNode.data).toBe(1);
      expect(this.head).toEqual(this.tail);
    });

    test("удалить последнюю ноду из связного списка из двух нод", () => {
      // Arrange
      linkedList.append(1).append(2);

      // Act
      let deletedNode = linkedList.delete(2);

      // Assert
      expect(linkedList.size).toBe(1);
      expect(deletedNode.data).toBe(2);
      expect(this.head).toEqual(this.tail);
    });

    test("удалить ноду в середине связного списка из трех нод", () => {
      // Arrange
      linkedList.append(1).append(2).append(3);
      const comparisonString = "1, 3";

      // Act
      let deletedNode = linkedList.delete(2);

      // Assert
      expect(linkedList.size).toBe(2);
      expect(deletedNode.data).toBe(2);
      expect(linkedList.toString()).toBe(comparisonString);
    });
  });

  describe("insertAt", () => {
    // test("insert to negative index");
    test("insert to empty list", () => {
      linkedList.insertAt(0, 1);

      const compareList = new LinkedList().append(1);

      expect(linkedList.size).toBe(1);
      expect(linkedList.head).toEqual(compareList.head);
      expect(linkedList.toString()).toBe("1");
      expect(linkedList.head).toEqual(linkedList.tail);
    });

    test("throws an exception if use negative index", () => {
      linkedList.append(1).append(2);

      const mistakenCall = () => linkedList.insertAt(-1, "Negative value");

      expect(mistakenCall).toThrowError(/negative index/);
    });

    test("throws an exception if the index grater than size of linked list", () => {
      linkedList.append(1).append(2);

      const mistakenAction = () => linkedList.insertAt(5, "Index grater");

      expect(mistakenAction).toThrowError(
        /Index should be less than or equal to the list length/
      );
    });

    test("insert by index in middle of linked list", () => {
      // Arrange
      linkedList.append(1).append(3);
      const compareList = createLinkedListWithSeveralNodes();

      // Act
      linkedList.insertAt(1, 2);

      // Assert
      expect(linkedList.size).toBe(3);
      expect(linkedList).toEqual(compareList);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.tail?.next).toBeNull();
      expect(linkedList.head.next.data).toBe(2);
    });

    test("insert in start of linked list", () => {
      // Arrange
      linkedList.append(2).append(3);
      const compareList = createLinkedListWithSeveralNodes();

      // Act
      linkedList.insertAt(0, 1);

      // Assert
      expect(linkedList.size).toBe(3);
      expect(linkedList).toEqual(compareList);
      expect(linkedList.head.next.data).toBe(2);
    });
  });

  describe("find", () => {
    // Arrange
    const list = createLinkedListWithSeveralNodes();

    test("finds a first node", () => {
      // Act
      const targetNode = list.find(1);

      // Assert
      expect(targetNode).toEqual(list.head);
    });

    test("finds a middle node", () => {
      // Act
      const targetNode = list.find(2);

      // Assert
      expect(targetNode.data).toEqual(2);
    });

    test("finds a last node", () => {
      // Act
      const targetNode = list.find(3);

      // Assert
      expect(targetNode.data).toEqual(3);
    });

    test("target value didn't find", () => {
      // Act
      const targetNode = list.find(5);

      // Assert
      expect(targetNode).toBeNull();
    });
  });
});
