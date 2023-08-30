export default class CircularQueue {
  queue: number[];
  size: number;
  head = -1;
  tail = -1;
  constructor(k: number) {
    this.queue = Array(k).fill(undefined);
    this.size = k;
  }
  /**
   * 从队首获取元素。如果队列为空，返回 -1 。
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }
  /**
   * 获取队尾元素。如果队列为空，返回 -1 。
   */
  Rear() {
    if (this.isEmpty()) return -1;
    return this.queue[this.tail];
  }
  /**
   * 向循环队列插入一个元素。如果成功插入则返回真。
   */
  enQueue(value: number) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    return true;
  }
  /**
   * 从循环队列中删除一个元素。如果成功删除则返回真。
   */
  deQueue() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.size;
    if (this.head === (this.tail + 1) % this.size) {
      this.head = -1;
      this.tail = -1;
    }
    return true;
  }
  /**
   * 检查循环队列是否为空。
   */
  isEmpty() {
    return this.head === -1 && this.tail === -1;
  }
  /**
   * 检查循环队列是否已满。
   */
  isFull() {
    return (
      this.head !== -1 &&
      this.tail !== -1 &&
      (this.tail + 1) % this.size === this.head
    );
  }
}
