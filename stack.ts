class Stack<T> {
  private items: T[] = [];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items);
  }

  clear(): void {
    this.items = [];
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());