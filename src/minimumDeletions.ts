// 链接：https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced
// 给你一个字符串 s ，它仅包含字符 'a' 和 'b'。
// 你可以删除 s 中任意数目的字符，使得 s 平衡 。
// 当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。
// 请你返回使 s 平衡 的 最少 删除次数。

export default function minimumDeletions(s: string): number {
  const len = s.length;
  const arr = [0, 0]; // 第一次遍历，记下所有的 a b 的数量
  for (let i = 0; i < len; i++) {
    if (s[i] === "a") {
      arr[0] += 1;
    } else {
      arr[1] += 1;
    }
  }
  let res = Math.min(...arr);
  const temp = [0, 0]; // 第二次遍历，记下此时已经遍历的 a b 的数量
  for (let j = 0; j < len; j++) {
    if (s[j] === "a") {
      temp[0] += 1;
      arr[0] -= 1;
    } else {
      temp[1] += 1;
      arr[1] -= 1;
    }
    // 1. 前面删 b，后面删 a
    res = Math.min(res, temp[1] + arr[0]);
  }
  return res;
}
