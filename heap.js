class MaxHeap {
  constructor(array) {
    this.heap = array;
    this.buildMaxHeap();
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  maxHeapify(i) {
    const l = this.left(i);
    const r = this.right(i);
    let largest = i;

    if (l < this.heap.length && this.heap[l] > this.heap[i]) {
      largest = l;
    }

    if (r < this.heap.length && this.heap[r] > this.heap[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.maxHeapify(largest);
    }
  }

  buildMaxHeap() {
    const lastNonLeafNode = Math.floor(this.heap.length / 2) - 1;
    for (let i = lastNonLeafNode; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }
}
