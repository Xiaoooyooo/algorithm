// 给你一棵 n 个节点的树，编号从 0 到 n - 1 ，以父节点数组 parent 的形式给出，其中 parent[i] 是第 i 个节点的父节点。
// 树的根节点为 0 号节点，所以 parent[0] = -1 ，因为它没有父节点。你想要设计一个数据结构实现树里面对节点的加锁，解锁和升级操作。

// 数据结构需要支持如下函数：

// Lock：指定用户给指定节点 上锁 ，上锁后其他用户将无法给同一节点上锁。只有当节点处于未上锁的状态下，才能进行上锁操作。
// Unlock：指定用户给指定节点 解锁 ，只有当指定节点当前正被指定用户锁住时，才能执行该解锁操作。
// Upgrade：指定用户给指定节点 上锁 ，并且将该节点的所有子孙节点 解锁 。只有如下 3 个条件 全部 满足时才能执行升级操作：
// 指定节点当前状态为未上锁。
// 指定节点至少有一个上锁状态的子孙节点（可以是 任意 用户上锁的）。
// 指定节点没有任何上锁的祖先节点。
// 请你实现 LockingTree 类：

// LockingTree(int[] parent) 用父节点数组初始化数据结构。
// lock(int num, int user) 如果 id 为 user 的用户可以给节点 num 上锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 id 为 user 的用户 上锁 。
// unlock(int num, int user) 如果 id 为 user 的用户可以给节点 num 解锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 变为 未上锁 状态。
// upgrade(int num, int user) 如果 id 为 user 的用户可以给节点 num 升级，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 升级 。

export default class LockingTree {
  private parentMap = new Map<number, number>();
  private childrenMap = new Map<number, number[]>();
  private locked = new Map<number, number>();
  constructor(parent: number[]) {
    const len = parent.length;
    for (let i = 1; i < len; i++) {
      this.parentMap.set(i, parent[i]);
      this.childrenMap.set(
        parent[i],
        this.childrenMap.has(parent[i])
          ? this.childrenMap.get(parent[i]).concat([i])
          : [i]
      );
    }
  }

  lock(num: number, user: number): boolean {
    if (this.locked.has(num)) return false;
    this.locked.set(num, user);
    return true;
  }

  unlock(num: number, user: number): boolean {
    if (this.locked.has(num) && this.locked.get(num) === user) {
      this.locked.delete(num);
      return true;
    }
    return false;
  }

  upgrade(num: number, user: number): boolean {
    if (this.locked.has(num)) return false;
    let queue = [];
    queue.push(this.parentMap.get(num));
    while (queue.length) {
      const curr = queue.shift();
      if (curr === undefined) continue;
      if (this.locked.has(curr)) return false;
      queue.push(this.parentMap.get(curr));
    }
    queue = [];
    if (!this.childrenMap.has(num)) return false;
    let _locked = [];
    queue.push(...this.childrenMap.get(num));
    while (queue.length) {
      const curr = queue.shift();
      if (this.childrenMap.has(curr)) {
        queue.push(...this.childrenMap.get(curr));
      }
      if (this.locked.has(curr)) {
        _locked.push(curr);
      }
    }
    if (_locked.length === 0) return false;
    this.locked.set(num, user);
    for (let item of _locked) {
      this.locked.delete(item);
    }
    return true;
  }
}
