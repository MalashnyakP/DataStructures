import { LinkedList } from "./LinkedList";

describe("#unshift", () => {
  test("it adds element at the beginning of list", () => {
    const li = new LinkedList<number>();
    li.unshift(1);
    const firstHead = li.head;
    li.unshift(2);

    expect(li.head.value).toBe(2);
    expect(li.head.next).toBe(firstHead);
    expect(li.length).toBe(2);
  });
});

describe("#push", () => {
  test("add element to tail", () => {
    const li = new LinkedList<number>();
    li.push(1);
    const firstTail = li.tail;
    li.push(2);

    expect(li.tail.value).toBe(2);
    expect(firstTail.next).toBe(li.tail);
    expect(li.length).toBe(2);
  });
});

describe("#shift", () => {
  test("removes element from the start", () => {
    const li = _createListFromValues(1, 2, 3);
    const oldHead = li.head;
    const newHead = li.head.next;
    const shifted = li.shift();

    expect(shifted).toBe(oldHead);
    expect(li.head).toBe(newHead);
  });
});

describe("#pop", () => {
  test("pop empty list", () => {
    const li = new LinkedList<number>();
    expect(li.pop()).toBeNull();
  });

  test("pop one element", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    const oldTail = li.tail;

    expect(li.pop()).toBe(oldTail);
    expect(li.length).toBe(2);
  });

  test("pop last element", () => {
    const li = _createListFromValues<number>(1);
    li.pop();

    expect(li.head).toBeNull();
    expect(li.tail).toBeNull();
  });
});

describe("#get", () => {
  test("index less than 0", () => {
    const li = _createListFromValues<number>(1, 2, 3);

    expect(li.get(-1)).toBeNull();
  });

  test("index greater than length", () => {
    const li = _createListFromValues<number>(1, 2, 3);

    expect(li.get(4)).toBeNull();
  });

  test("index equals 0", () => {
    const li = _createListFromValues<number>(1, 2, 3);

    expect(li.get(0)).toBe(li.head);
  });

  test("index is greater than 0 but lesser than length", () => {
    const li = _createListFromValues<number>(1, 2, 3);

    expect(li.get(1).value).toBe(2);
  });
});

describe("#insert", () => {
  test("index less than 0", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    li.insert(3, -1);

    expect(li.length).toBe(3);
  });

  test("index greater than length", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    li.insert(4, 5);

    expect(li.length).toBe(3);
  });

  test("index in between 0 and length", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    li.insert(4, 1);

    expect(li.length).toBe(4);
  });

  test("insert at the begining", () => {
    const li = new LinkedList<number>();
    li.insert(1, 0);
    expect(li.head.value).toBe(1);
  });
});

describe("#remove", () => {
  test("index is lesser than 0", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    const removed = li.remove(-1);

    expect(li.length).toBe(3);
    expect(removed).toBe(null);
  });

  test("index is greater than length", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    const removed = li.remove(4);

    expect(li.length).toBe(3);
    expect(removed).toBe(null);
  });

  test("index is 0", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    const prevHead = li.head;
    const removed = li.remove(0);

    expect(li.length).toBe(2);
    expect(removed).toBe(prevHead);
  });

  test("index is between 0 and length", () => {
    const li = _createListFromValues<number>(1, 2, 3);
    const elemAtIndex = li.get(1);
    const removed = li.remove(1);

    expect(li.length).toBe(2);
    expect(removed).toBe(elemAtIndex);
  });
});

describe("#iterator for of", () => {
  test("iteration should return same array", () => {
    const array = [1, 2, 3];
    const li = _createListFromValues<number>(...array);
    const newArray: number[] = [];

    for (const el of li) {
      newArray.push(el);
    }

    expect(newArray).toStrictEqual(array);
  });
});

describe("#print", () => {
  test("print list", () => {
    const li = _createListFromValues(1, 2, 3);
    const output = li.print();
    expect(output).toBe("1 -> 2 -> 3 -> ");
  });
});

function _createListFromValues<T>(...values: T[]): LinkedList<T> {
  const ll = new LinkedList<T>();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.unshift(values[i]);
  }
  return ll;
}
