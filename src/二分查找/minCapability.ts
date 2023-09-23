// https://leetcode.cn/problems/house-robber-iv/description/
// 沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。
// 由于相邻的房屋装有相互连通的防盗系统，所以小偷 不会窃取相邻的房屋 。
// 小偷的 窃取能力 定义为他在窃取过程中能从单间房屋中窃取的 最大金额 。
// 给你一个整数数组 nums 表示每间房屋存放的现金金额。形式上，从左起第 i 间房屋中放有 nums[i] 美元。
// 另给你一个整数 k ，表示窃贼将会窃取的 最少 房屋数。小偷总能窃取至少 k 间房屋。
// 返回小偷的 最小 窃取能力。

// * 官方题解 二分查找
export default function minCapability(nums: number[], k: number): number {
  let lower = Math.min(...nums);
  let upper = Math.max(...nums);
  while (lower <= upper) {
    const middle = Math.floor((lower + upper) / 2);
    let count = 0;
    let visited = false;
    for (const x of nums) {
      if (x <= middle && !visited) {
        count++;
        visited = true;
      } else {
        visited = false;
      }
    }
    if (count >= k) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return lower;
}

// 栈溢出
// export default function minCapability(nums: number[], k: number): number {
//   let res = Number.MAX_SAFE_INTEGER;
//   function dfs(index: number, max: number, count: number) {
//     if (max >= res) return;
//     if (count === k) {
//       res = Math.min(res, max);
//       return;
//     }
//     if (index >= nums.length) return;
//     dfs(index + 2, Math.max(max, nums[index]), count + 1);
//     dfs(index + 1, max, count);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     dfs(i, 0, 0);
//   }
//   return res;
// }
