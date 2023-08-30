// https://leetcode.cn/problems/binary-trees-with-factors/
// 给出一个含有不重复整数元素的数组 arr ，每个整数 arr[i] 均大于 1。
// 用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。
// 满足条件的二叉树一共有多少个？答案可能很大，返回 对 10^9 + 7 取余 的结果。

// 官方题解 动态规划 + 双指针
export default function numFactoredBinaryTrees(arr: number[]): number {
  const n = arr.length;
  const mod = 1e9 + 7;
  const dp = new Array(n).fill(1);
  arr.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let left = 0, right = i - 1; left <= right; left++) {
      while (right >= left && arr[left] * arr[right] > arr[i]) {
        right--;
      }
      if (right >= left && arr[left] * arr[right] == arr[i]) {
        if (right != left) {
          dp[i] = (dp[i] + dp[left] * dp[right] * 2) % mod;
        } else {
          dp[i] = (dp[i] + dp[left] * dp[right]) % mod;
        }
      }
    }
    res = (res + dp[i]) % mod;
  }
  return res;
}

// 枚举优化
// export default function numFactoredBinaryTrees(arr: number[]): number {
//   const mod = 10 ** 9 + 7;
//   const len = arr.length;
//   let count = len;
//   const map = new Map();
//   for (let i = 0; i < len; i++) {
//     map.set(arr[i], 1);
//   }
//   arr.sort((a, b) => a - b);
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       const t = arr[i] / arr[j];
//       if (map.has(t)) {
//         let c = map.get(arr[j]) * map.get(t);
//         count = (count + c) % mod;
//         map.set(arr[i], map.get(arr[i]) + c);
//       }
//     }
//   }
//   return count;
// }

// 暴力枚举 O(n^3)
// export default function numFactoredBinaryTrees(arr: number[]): number {
//   const mod = 10 ** 9 + 7;
//   const len = arr.length;
//   let count = len;
//   const map = new Map();
//   for (let i = 0; i < len; i++) {
//     map.set(arr[i], 1);
//   }
//   arr.sort((a, b) => a - b);
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       for (let k = 0; k <= j; k++) {
//         if (arr[j] * arr[k] === arr[i]) {
//           let c = map.get(arr[j]) * map.get(arr[k]);
//           if (j !== k) c *= 2; // 左右节点可以交换位置
//           count = (count + c) % mod;
//           map.set(arr[i], map.get(arr[i]) + c);
//         }
//       }
//     }
//   }
//   return count;
// }
