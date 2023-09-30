// 最小堆
// 和最大堆类似
// 最大堆的父节点的值大于等于其子节点的值
// 最小堆的父节点的值小于等于其子节点的值

//    0
//  1   2
// 3 4 5 6
export default class MinHeap {
  private queue: number[] = [];
  constructor() {}
  // 元素入堆
  push(value: number) {
    this.queue.push(value);
    this.shiftUp();
  }
  // 堆顶元素出堆
  pop() {
    const first = this.queue[0];
    if (this.size() > 1) {
      this.queue[0] = this.queue[this.size() - 1];
    }
    this.queue.pop();
    this.shiftDown();
    return first;
  }
  // 访问堆顶元素（大 / 小顶堆分别为最大 / 小值）
  peek() {
    return this.queue[0];
  }
  //获取堆的元素数量
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  private shiftUp() {
    let index = this.size() - 1;
    let parent = Math.floor((index - 1) / 2);
    while (parent >= 0 && this.queue[parent] > this.queue[index]) {
      [this.queue[parent], this.queue[index]] = [
        this.queue[index],
        this.queue[parent]
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  private shiftDown() {
    let index = 0;
    let leftChild = (index + 1) * 2 - 1,
      rightChild = leftChild + 1;
    const size = this.size();
    while (
      index < size &&
      ((leftChild < size && this.queue[index] > this.queue[leftChild]) ||
        (rightChild < size && this.queue[index] > this.queue[rightChild]))
    ) {
      let min: number;
      if (leftChild < size && rightChild < size) {
        min =
          this.queue[leftChild] < this.queue[rightChild]
            ? leftChild
            : rightChild;
      } else if (leftChild < size) {
        min = leftChild;
      } else {
        min = rightChild;
      }
      [this.queue[index], this.queue[min]] = [
        this.queue[min],
        this.queue[index]
      ];
      index = min;
      leftChild = (index + 1) * 2 - 1;
      rightChild = leftChild + 1;
    }
  }
}
