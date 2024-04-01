export class MinHeap {
  public length: number = 0;
  public data: number[] = [];

  insert(value: number): void {
    this.data[this.length] = value;
    this.hepaifyUp(this.length);
    this.length++;
  }

  // TODO: this doesnt actually deletes, just reorders and updates length putting deleted value outside of length
  delete(): number {
    if (this.length === 0) return -1;
    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) return;

    const leftIdx = this.leftChildIdx(idx);
    const rightIdx = this.rightChildIdx(idx);

    if (leftIdx >= this.length) return;

    const leftValue = this.data[leftIdx];
    const rightValue = this.data[rightIdx];
    const value = this.data[idx];

    if (leftValue > rightValue && value > rightValue) {
      this.data[idx] = rightValue;
      this.data[rightIdx] = value;
      this.heapifyDown(rightIdx);
    } else if (rightValue > leftValue && value > leftValue) {
      this.data[idx] = leftValue;
      this.data[leftIdx] = value;
      this.heapifyDown(leftIdx);
    }
  }

  private hepaifyUp(idx: number): void {
    if (idx === 0) return;

    const parentIdx = this.parentIdx(idx);
    const parentValue = this.data[parentIdx];
    const value = this.data[idx];

    if (parentValue > value) {
      this.data[idx] = parentValue;
      this.data[parentIdx] = value;
      this.hepaifyUp(parentIdx);
    }
  }

  private parentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private leftChildIdx(idx: number): number {
    return idx * 2 + 1;
  }
  private rightChildIdx(idx: number): number {
    return idx * 2 + 2;
  }
}
