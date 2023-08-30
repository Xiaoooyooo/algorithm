// https://leetcode.cn/problems/4sum/description/
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]]
// 若两个四元组元素一一对应，则认为两个四元组重复：
// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

export default function fourSum(nums: number[], target: number): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  const set = new Set();
  const nummap = new Map();
  nums.forEach((el) => {
    nummap.set(el, (nummap.get(el) || 0) + 1);
  });
  const dfs = function (curr: number[], index: number) {
    if (curr.length === 4 || index >= len) return;
    if (curr.length === 3) {
      const sum = curr.reduce((p, c) => p + c);
      const t = target - sum;
      if (!nummap.has(t)) return;
      const dic = {};
      const _curr = [...curr, t];
      _curr.forEach((el) => (dic[el] = nummap.get(el)));
      _curr.forEach((el) => (dic[el] -= 1));
      for (let item in dic) {
        if (dic[item] < 0) return;
      }
      const id = [...curr, t].sort((a, b) => a - b).join(",");
      if (set.has(id)) return;
      set.add(id);
      res.push([...curr, t]);
    }
    // 跳过当前数
    dfs([...curr], index + 1);
    // 加上当前数
    dfs([...curr, nums[index]], index + 1);
  };
  dfs([], 0);
  return res;
}
