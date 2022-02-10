class ListNode<T> {
  constructor(public value: T, public next: ListNode<T>) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  public head: ListNode<T> = null;
  public tail: ListNode<T> = null;
  public length: number = 0;

  constructor(headNode?: ListNode<T>) {
    this.head = headNode || null;
  }

  public get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  public unshift(data: T): void {
    const newNode = new ListNode<T>(data, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  public push(data: T): void {
    const newNode = new ListNode<T>(data, null);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  public insert(data: T, index: number) {
    if (index === 0) return this.unshift(data);

    const prevNode = this.get(index - 1);
    if (prevNode === null) return;

    prevNode.next = new ListNode(data, prevNode.next);
    this.length++;
  }

  public shift(): ListNode<T> {
    this.length--;
    const removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  public pop(): ListNode<T> {
    if (!this.head) return null;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  public remove(index: number): ListNode<T> {
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    if (prevNode === null) return null;

    const removed = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removed;
  }

  public print() {
    let output = "";
    let current = this.head;

    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    return output;
  }

  private *values() {
    let curr = this.head;

    while (curr !== null) {
      yield curr.value;
      curr = curr.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}
