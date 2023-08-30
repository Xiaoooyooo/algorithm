// 链接：https://leetcode.cn/leetbook/read/queue-stack/g5l7d/
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 实现 MinStack 类:
// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

export default class MinStack {
  private stack: number[] = [];
  private minNum: number;

  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    if (this.minNum !== undefined && this.minNum > val) {
      this.minNum = val;
    }
  }

  pop(): void {
    let num = this.stack.pop();
    if (this.minNum === num && this.stack.indexOf(this.minNum) === -1) {
      this.minNum = undefined;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    if (this.minNum === undefined) {
      this.minNum = this.stack[0];
      for (let i = 1, len = this.stack.length; i < len; i++) {
        let num = this.stack[i];
        if (this.minNum > num) {
          this.minNum = num;
        }
      }
    }

    return this.minNum;
  }
}

// export default class MinStack {
//   private stack: number[] = [];
//   private sorted: number[] = [];

//   push(val: number): void {
//     this.stack.push(val);
//     const arr = [];
//     let i = 0,
//       len = this.sorted.length,
//       flag = false;
//     while (i < len) {
//       if (this.sorted[i] < val && !flag) {
//         arr.push(val);
//         flag = true;
//       } else {
//         arr.push(this.sorted[i]);
//         i++;
//       }
//     }
//     if (!flag) {
//       arr.push(val);
//     }
//     this.sorted = arr;
//   }

//   pop(): void {
//     const val = this.stack.pop();
//     let flag = false;
//     this.sorted = this.sorted.filter((e) => {
//       if (!flag && e === val) {
//         flag = true;
//         return false;
//       }
//       return true;
//     });
//   }

//   top(): number {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin(): number {
//     return this.sorted[this.sorted.length - 1];
//   }
// }
