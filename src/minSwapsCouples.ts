// https://leetcode.cn/problems/couples-holding-hands/
// n 对情侣坐在连续排列的 2n 个座位上，想要牵到对方的手。
// 人和座位由一个整数数组 row 表示，其中 row[i] 是坐在第 i 个座位上的人的 ID。
// 情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2n-2, 2n-1)。
// 返回 最少交换座位的次数，以便每对情侣可以并肩坐在一起。 每次交换可选择任意两人，让他们站起来交换座位。

class UnionFind {
  private parent: number[] = [];

  private count: number;

  public getCount() {
    return this.count;
  }

  public constructor(n: number) {
    this.count = n;
    this.parent = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  public find(x: number) {
    while (x != this.parent[x]) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  public union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX == rootY) {
      return;
    }

    this.parent[rootX] = rootY;
    this.count--;
  }
}

// 官方题解 并查集
export default function minSwapsCouples(row: number[]): number {
  const len = row.length;
  const N = len / 2;
  const unionFind = new UnionFind(N);
  for (let i = 0; i < len; i += 2) {
    unionFind.union(Math.floor(row[i] / 2), Math.floor(row[i + 1] / 2));
  }
  return N - unionFind.getCount();
}
