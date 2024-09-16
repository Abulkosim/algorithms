class MinHeap {
  private heap: number[] = [];

  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  private heapifyUp(i: number): void {
    const parentIndex = this.getParentIndex(i);
    if (parentIndex >= 0 && this.heap[i] < this.heap[parentIndex]) {
      this.swap(i, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(i: number): void {
    const leftIndex = this.getLeftChildIndex(i);
    const rightIndex = this.getRightChildIndex(i);
    let smallest = i;

    if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }
}

function heapSort(arr: number[]): number[] {
  const heap = new MinHeap();
  arr.forEach(num => heap.insert(num));

  const sorted: number[] = [];
  while (true) {
    const min = heap.extractMin();
    if (min === undefined) break;
    sorted.push(min);
  }

  return sorted;
}

const unsortedArray = [4, 10, 3, 5, 1];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", heapSort(unsortedArray));