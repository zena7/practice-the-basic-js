import { beforeEach, describe, expect, test } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  test("create empty stack", () => {
    const expectedSize = 0;

    expect(stack).toBeDefined();
    expect(stack.getSize()).toBe(expectedSize);
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("add an item to stack using method push", () => {
    const expectedData = 5;

    stack.push(5);

    console.log("STACK", stack);

    expect(stack.getSize()).toBe(1);
    expect(stack.peek()).toBe(expectedData);
  });

  test("add some items to stack using method push", () => {
    stack.push(1).push(2).push(3);

    expect(stack.getSize()).toBe(3);
    expect(stack.toString()).toBe("3, 2, 1");
    expect(stack.peek()).toBe(3);
  });

  describe("pop", () => {
    test("delete the top item of stack", () => {
      stack.push(1).push(2).push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.getSize()).toBe(2);
      expect(stack.toString()).toBe("2, 1");
    });

    test("try to delete an item using method pop from empty stack", () => {
      expect(stack.pop()).toBeNull();
      expect(stack.getSize()).toBe(0);
      expect(stack.toString()).toBe("");
    });
  });

  describe("peek", () => {
    test("peek item from empty stack", () => {
      expect(stack.peek()).toBeNull();
    });

    test("peek item from stack", () => {
      stack.push(1).push(2);

      expect(stack.getSize()).toBe(2);
      expect(stack.peek()).toBe(2);
      expect(stack.getSize()).toBe(2);
    });
  });
});
