class LNode<T> {
  data: T;
  prev: LNode<T> | null;
  next: LNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: LNode<T> | null;
  tail: LNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data: T): void {
    const newNode = new LNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  prepend(data: T): void {
    const newNode = new LNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  delete(data: T): void {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev !== null) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next !== null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }

      current = current.next as LNode<T>;
    }
  }

  printList(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);

      if (current.next !== null) {
        console.log('↓↑')
      }
      current = current.next as LNode<T>;
    }
  }

  reversePrintList(): void {
    let current = this.tail;

    while (current) {
      console.log(current.data);

      if (current.prev !== null) {
        console.log('↓↑')
      }

      current = current.prev as LNode<T>;
    }
  }

  search(data: T): boolean {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }

      current = current.next as LNode<T>;
    }

    return false;
  }

  insertAfter(target: T, data: T): void {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === target) {
        const newNode = new LNode(data);

        newNode.prev = current;
        newNode.next = current.next;

      }
    }
  }
}

let anotherList = new DoublyLinkedList<number>();
anotherList.append(1);
anotherList.append(2);
anotherList.append(3);
anotherList.append(4);
anotherList.append(5);

anotherList.reversePrintList();