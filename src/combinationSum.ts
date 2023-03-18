// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
// 你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。
// 如果至少一个数字的被选数量不同，则两种组合是不同的。
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
// 链接：https://leetcode.cn/problems/combination-sum

// 回溯
export default function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const len = candidates.length;
  const res = [];
  const helper = function (i: number, target: number, c: number[]) {
    if (i === len) return;
    if (target === 0) {
      res.push(c);
      return;
    }
    // 当前元素为回溯点
    // 跳过当前元素，在后面查找可能的组合
    helper(i + 1, target, c);
    if (target >= candidates[i]) {
      // 如果当前元素小于 target 的话
      // 把这个元素加入到组合中
      helper(i, target - candidates[i], [...c, candidates[i]]);
    }
  };
  helper(0, target, []);
  return res;
}
