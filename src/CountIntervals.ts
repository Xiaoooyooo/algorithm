// https://leetcode.cn/problems/count-integers-in-intervals/
// 给你区间的 空 集，请你设计并实现满足要求的数据结构：
// 新增：添加一个区间到这个区间集合中。
// 统计：计算出现在 至少一个 区间中的整数个数。
// 实现 CountIntervals 类：
// CountIntervals() 使用区间的空集初始化对象
// void add(int left, int right) 添加区间 [left, right] 到区间集合之中。
// int count() 返回出现在 至少一个 区间中的整数个数。
// 注意：区间 [left, right] 表示满足 left <= x <= right 的所有整数 x 。

class Node {
  val = 0;
  start: number;
  end: number;
  left?: Node;
  right?: Node;
  constructor(start: number, end: number) {
    this.val = 0;
    this.start = start;
    this.end = end;
  }
}

class SegmentTree {
  root: Node;
  constructor(start: number, end: number) {
    this.root = new Node(start, end);
  }
  update(start: number, end: number) {
    this.updateNode(this.root, start, end);
  }
  updateNode(node: Node, start: number, end: number) {
    if (!node) {
      return;
    }
    if (start > node.end || end < node.start) {
      return;
    } else if (start <= node.start && end >= node.end) {
      node.val = node.end - node.start + 1;
      return;
    } else {
      this.pushdown(node);
      this.updateNode(node.left, start, end);
      this.updateNode(node.right, start, end);
      this.pushup(node);
    }
  }
  pushdown(node: Node) {
    if (!node) {
      return;
    }
    const mid = Math.floor((node.start + node.end) / 2);
    if (!node.left) {
      node.left = new Node(node.start, mid);
    }
    if (!node.right) {
      node.right = new Node(mid + 1, node.end);
    }
    if (node.val === node.end - node.start + 1) {
      node.left.val = mid - node.start + 1;
      node.right.val = node.end - mid;
    }
  }
  pushup(node: Node) {
    node.val = node.left.val + node.right.val;
  }
  query(start: number, end: number) {
    return this.queryNode(this.root, start, end);
  }
  queryNode(node: Node, start: number, end: number) {
    if (!node) {
      return 0;
    }
    if (start > node.end || end < node.start) {
      return 0;
    } else if (start <= node.start && end >= node.end) {
      return node.val;
    } else {
      this.pushdown(node);
      return (
        this.queryNode(node.left, start, end) +
        this.queryNode(node.right, start, end)
      );
    }
  }
}

// * 线段树
// https://leetcode.cn/problems/count-integers-in-intervals/solutions/1495230/by-scnu_evan-wxof/
export default class CountIntervals {
  tree = new SegmentTree(0, 1e9);
  constructor() {}

  add(left: number, right: number): void {
    this.tree.update(left, right);
  }

  count(): number {
    return this.tree.query(0, 1e9);
  }
}
