// Range模块是跟踪数字范围的模块。设计一个数据结构来跟踪表示为 半开区间 的范围并查询它们。
// 半开区间 [left, right) 表示所有 left <= x < right 的实数 x 。
// 实现 RangeModule 类:
// RangeModule() 初始化数据结构的对象。
// void addRange(int left, int right) 添加 半开区间 [left, right)，跟踪该区间中的每个实数。
//   添加与当前跟踪的数字部分重叠的区间时，应当添加在区间 [left, right) 中尚未跟踪的任何数字到该区间中。
// boolean queryRange(int left, int right) 只有在当前正在跟踪区间 [left, right) 中的每一个实数时，才返回 true ，否则返回 false 。
// void removeRange(int left, int right) 停止跟踪 半开区间 [left, right) 中当前正在跟踪的每个实数。

class ListNode {
  value?: number;
  type?: "left" | "right";
  next: ListNode;
  constructor(value?: number, type?: "left" | "right") {
    this.value = value;
    this.type = type;
  }
}

// 链表
export default class RangeModule {
  head = new ListNode();
  tail = new ListNode();
  constructor() {
    this.head.next = this.tail;
  }
  addRange(left: number, right: number): void {
    let curr = this.head;
    // 找到 left 应该插入的位置
    while (curr.next !== this.tail) {
      if (curr.next.value >= left) break;
      curr = curr.next;
    }
    if (curr.next === this.tail) {
      // 链表中没有找到合适的插入位置，直接插入到末尾
      const l = new ListNode(left, "left");
      const r = new ListNode(right, "right");
      l.next = r;
      r.next = curr.next;
      curr.next = l;
      return;
    }

    if (curr.next.type === "left") {
      // left 找到了合适的位置，且在下一个区间左边界的左边
      const _l = curr.next,
        _r = _l.next;
      if (left === _l.value && right <= _r.value) {
        // 新加的区间在已有区间内，什么都不做
        return;
      }
      // 新加区间的左边界下一个区间左边界的左边
      const l = new ListNode(left, "left");
      // 将区间左边界添加到链表
      curr.next = l;
      curr = _l;
      // 在链表剩余位置中找到合适位置插入 right
      while (curr !== this.tail) {
        if (curr.value >= right) break;
        curr = curr.next;
      }
      if (curr.type === "right") {
        // 找到了合适的位置，并且这个位置在一个区间之内
        // 直接扩展该区间
        l.next = curr;
      } else {
        if (right === curr.value) {
          // 如果这个位置刚好和新区间的右边界重合，那么合并这两段区间
          l.next = curr.next;
        } else {
          // 没有找到合适的位置，或这个位置在一个区间左边界的左边
          const r = new ListNode(right, "right");
          l.next = r;
          r.next = curr;
        }
      }
    } else {
      // left 找到了合适的位置，且在一个区间右边界的左边
      if (right <= curr.next.value) {
        // 如果新加区间的右边界在这个区间之内，那么什么都不用做
        return;
      }
      const _l = curr,
        _r = curr.next;
      curr = _r;
      // 找到一个合适的位置插入 right
      while (curr !== this.tail) {
        if (curr.value >= right) break;
        curr = curr.next;
      }
      if (curr.type === "right") {
        // 如果新加区间的右边界在一个区间右边界的左边，那么合并这两段区间
        _l.next = curr;
      } else {
        if (right === curr.value) {
          // 新加区间的右边界刚好和接下来的一段区间的左边界重合，那么合并这两段区间
          _l.next = curr.next;
        } else {
          // 没有找到合适的位置插入 right，或者该位置在一个区间左边界的左边
          const r = new ListNode(right, "right");
          _l.next = r;
          r.next = curr;
        }
      }
    }
  }

  queryRange(left: number, right: number): boolean {
    let curr = this.head.next;
    while (curr !== this.tail) {
      if (curr.value >= left) break;
      curr = curr.next;
    }
    if (curr === this.tail) return false;
    if (curr.type === "left") {
      return left === curr.value && right <= curr.next.value;
    }
    return curr.value >= right;
  }

  removeRange(left: number, right: number): void {
    let curr = this.head;
    while (curr.next !== this.tail) {
      if (curr.next.value >= left) break;
      curr = curr.next;
    }

    if (curr.next === this.tail) return;
    if (curr.next.type === "left") {
      if (right <= curr.next.value) return;
      const temp = curr;
      curr = curr.next;
      while (curr !== this.tail) {
        if (curr.value >= right) break;
        curr = curr.next;
      }
      if (curr.type === "right") {
        const l = new ListNode(right, "left");
        temp.next = l;
        l.next = curr;
      } else {
        temp.next = curr;
      }
    } else {
      const r = new ListNode(left, "right");
      const temp = curr.next;
      curr.next = r;
      curr = temp;
      while (curr !== this.tail) {
        if (curr.value >= right) break;
        curr = curr.next;
      }
      if (curr.type === "right") {
        if (right === curr.value) {
          r.next = curr.next;
        } else {
          const l = new ListNode(right, "left");
          r.next = l;
          l.next = curr;
        }
      } else {
        r.next = curr;
      }
    }
  }

  print() {
    let curr = this.head.next;
    let res = "";
    while (curr !== this.tail) {
      res += `[${curr.value},${curr.next.value}) `;
      curr = curr.next.next;
    }
    console.log(res);
  }
}
