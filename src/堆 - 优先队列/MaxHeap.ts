// 最大堆
export default class MaxHeap {
  data: number[] = [];
  getMax() {
    if (!this.data.length) return undefined;
    return this.data[0];
  }
  deleteMax() {
    if (!this.data.length) return undefined;
    const max = this.data[0];
    [this.data[0], this.data[this.data.length - 1]] = [
      this.data[this.data.length - 1],
      this.data[0]
    ];
    this.data.pop();
    this.shiftDown();
    return max;
  }
  add(value: number) {
    this.data.push(value);
    this.shiftUp();
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
  private shiftDown() {
    let i = 0;
    let left = 2 * (i + 1) - 1,
      right = 2 * (i + 1);
    while (this.data[i] < this.data[left] || this.data[i] < this.data[right]) {
      let temp: number;
      if (this.data[i] < this.data[left] && this.data[i] < this.data[right]) {
        temp = this.data[left] > this.data[right] ? left : right;
      } else if (this.data[i] < this.data[left]) {
        temp = left;
      } else {
        temp = right;
      }
      [this.data[i], this.data[temp]] = [this.data[temp], this.data[i]];
      i = temp;
      left = 2 * (i + 1) - 1;
      right = 2 * (i + 1);
    }
  }
  private shiftUp() {
    let i = this.data.length - 1;
    let parent = Math.floor((i - 1) / 2);
    while (this.data[i] > this.data[parent]) {
      [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }
}
