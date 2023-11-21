// https://leetcode.cn/problems/minimum-deletions-to-make-array-beautiful/description/
// 给你一个下标从 0 开始的整数数组 nums ，如果满足下述条件，则认为数组 nums 是一个 美丽数组 ：
// nums.length 为偶数
// 对所有满足 i % 2 == 0 的下标 i ，nums[i] != nums[i + 1] 均成立
// 注意，空数组同样认为是美丽数组。
// 你可以从 nums 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 不变 。
// 返回使 nums 变为美丽数组所需删除的 最少 元素数目。

// 官方题解
export default function minDeletion(nums: number[]): number {
  const n = nums.length;
  let ans = 0,
    check = true;
  for (let i = 0; i + 1 < n; i++) {
    if (nums[i] == nums[i + 1] && check) {
      ans++;
    } else {
      check = !check;
    }
  }
  if ((n - ans) % 2 != 0) {
    ans++;
  }
  return ans;
}

// dfs
// export default function minDeletion(nums: number[]): number {
//   const len = nums.length;
//   const map = new Map();
//   function dfs(index: number, dIndex: number) {
//     if (index >= len - 1) return 0;
//     const key = `${index},${dIndex}`;
//     if (map.has(key)) {
//       return map.get(key);
//     }
//     let d: number;
//     if (dIndex % 2 === 0 && nums[index] === nums[index + 1]) {
//       let b: number;
//       const a = 1 + dfs(index + 1, dIndex);
//       if (nums[index] !== nums[index + 2]) {
//         b = 1 + dfs(index + 2, dIndex + 1);
//       }
//       if (b !== undefined) {
//         d = a < b ? a : b;
//       } else {
//         d = a;
//       }
//     } else {
//       d = dfs(index + 1, dIndex + 1);
//     }
//     map.set(key, d);
//     return d;
//   }
//   let res = dfs(0, 0);
//   if ((len - res) % 2 !== 0) {
//     // 再把最后一个删掉
//     res += 1;
//   }
//   return res;
// }
