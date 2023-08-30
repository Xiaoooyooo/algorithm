// 链接：https://leetcode.cn/leetbook/read/queue-stack/kj48j/
// 你有一个带有四个圆形拨轮的转盘锁。
// 每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
// 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
// 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

export default function openLock(deadends: string[], target: string): number {
  const deadendsSet = new Set(deadends);
  const used = new Set();
  let queue: string[] = [];
  if (!deadendsSet.has("0000")) {
    queue.push("0000");
    used.add("0000");
  }
  let deep = 0;
  while (queue.length !== 0) {
    const total = queue.length;
    for (let i = 0; i < total; i++) {
      const curr = queue.shift();
      if (curr === target) return deep;
      for (let j = 0; j < 4; j++) {
        // prettier-ignore
        const s1 = curr.substring(0, j) + (Number(curr[j]) + 1) % 10 + curr.substring(j + 1);
        // prettier-ignore
        const s2 = curr.substring(0, j) + (Number(curr[j]) - 1 + 10) % 10 + curr.substring(j + 1);
        // 0000 的一个子节点可以是 1000
        // 反之 1000 的子节点不能有 0000
        // 否则会出现无限循环
        if (!deadendsSet.has(s1) && !used.has(s1)) {
          queue.push(s1);
          used.add(s1);
        }
        if (!deadendsSet.has(s2) && !used.has(s2)) {
          queue.push(s2);
          used.add(s2);
        }
      }
    }
    deep++;
  }
  return -1;
}

/**
 * * 方案2: 双向BFS
 */
let endSet: Set<string>;
let m1: Map<string, number>;
let m2: Map<string, number>;
let d1: Array<string>, d2: Array<string>;
export function openLock1(deadends: string[], target: string): number {
  endSet = new Set(deadends);
  m1 = new Map();
  m2 = new Map();
  d1 = [];
  d2 = [];
  if (endSet.has(target) || endSet.has("0000")) return -1;
  if (target == "0000") return 0;
  d1.push("0000"), d2.push(target);
  m1.set("0000", 0), m2.set(target, 0);
  while (d1.length && d2.length) {
    let res = -1;
    if (d1.length <= d2.length) res = update(m1, m2, d1);
    else res = update(m2, m1, d2);
    if (res != -1) return res;
  }
  return -1;
}

function update(
  m1: Map<string, number>,
  m2: Map<string, number>,
  d: Array<string>
): number {
  let size = d.length;
  for (let p = 0; p < size; p++) {
    const cur = d[p];
    const step = m1.get(cur);
    for (let i = 0; i < 4; i++) {
      // 每位数字可-1或者+1
      for (let k = -1; k <= 1; k++) {
        if (k == 0) continue;
        const num = Number(cur[i]);
        const next =
          cur.substring(0, i) + ((num + k + 10) % 10) + cur.substring(i + 1);
        if (!endSet.has(next)) {
          if (m1.has(next)) continue;
          if (m2.has(next)) return step + m2.get(next) + 1;
          m1.set(next, step + 1);
          d.push(next);
        }
      }
    }
  }
  d.splice(0, size);
  return -1;
}
