// https://leetcode.cn/problems/frequency-tracker/description/
// 请你设计并实现一个能够对其中的值进行跟踪的数据结构，并支持对频率相关查询进行应答。
// 实现 FrequencyTracker 类：
// FrequencyTracker()：使用一个空数组初始化 FrequencyTracker 对象。
// void add(int number)：添加一个 number 到数据结构中。
// void deleteOne(int number)：从数据结构中删除一个 number 。数据结构 可能不包含 number ，在这种情况下不删除任何内容。
// bool hasFrequency(int frequency): 如果数据结构中存在出现 frequency 次的数字，则返回 true，否则返回 false。

export default class FrequencyTracker {
  frequency: Map<number, number> = new Map();
  data: Map<number, number> = new Map();
  constructor() {}

  add(number: number): void {
    const count = this.data.get(number) || 0;
    if (count > 0) {
      this.frequency.set(count, this.frequency.get(count) - 1);
    }
    this.data.set(number, count + 1);
    this.frequency.set(count + 1, (this.frequency.get(count + 1) || 0) + 1);
  }

  deleteOne(number: number): void {
    const count = this.data.get(number) || 0;
    if (count === 0) {
      return;
    }
    this.data.set(number, count - 1);
    this.frequency.set(count, this.frequency.get(count) - 1);
    if (count - 1 > 0) {
      this.frequency.set(count - 1, (this.frequency.get(count - 1) || 0) + 1);
    }
  }

  hasFrequency(frequency: number): boolean {
    return (this.frequency.get(frequency) || 0) !== 0;
  }
}
