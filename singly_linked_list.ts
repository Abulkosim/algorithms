class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  append(data: T): void {
    const newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data: T): void {
    const newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
      return
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data: T): void {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null && current.next.data === data) {
      current.next = current.next.next;
    }
  }

  find(data: T): ListNode<T> | null {
    let current = this.head;

    while(current !== null) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList<string>();

list.append('a');
list.append('b');
list.append('c');

list.prepend('d');

list.print();

console.log(list.find('b'));
