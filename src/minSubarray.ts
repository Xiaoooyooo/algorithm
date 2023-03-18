// 链接：https://leetcode.cn/problems/make-sum-divisible-by-p
// 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。
// 不允许 将整个数组都移除。
// 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。
// 子数组 定义为原数组中连续的一组元素。

export default function minSubarray(nums: number[], p: number): number {
  const len = nums.length;
  let x = 0;
  for (let i = 0; i < len; i++) {
    x = (x + nums[i]) % p;
  }
  if (x === 0) return 0;
  // 在数组 nums 中寻找一段子数组 arr，使得 sum(arr) % p = x 成立
  // 计算前缀和
  const prefixSum = [0];
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  // 在数组 nums 中，(i, j] 区间中的元素和此时可以表示为 prefixSum[j] - prefixSum[i]
  // 因此现在需要找到一个区间，使得 (prefixSum[j] - prefixSum[i]) % p = x 成立
  // 等式换算：
  //   (prefixSum[j] - prefixSum[i]) % p = x
  //         prefixSum[j] - prefixSum[i] = α * p + x
  //                        prefixSum[i] = prefixSum[j] - α * p - x
  //                        prefixSum[i] = (prefixSum[j] - x) % p + β * p - α * p
  //                        prefixSum[i] = (prefixSum[j] - x) % p + (β - α) * p
  //                    prefixSum[i] % p = (prefixSum[j] - x) % p
  const map = new Map();
  let res = len;
  let curr = 0;
  for (let i = 0; i < len + 1; i++) {
    const target = (prefixSum[i] - x + p) % p; // 为了防止 (prefixSum[i] - x) % p 为负数
    if (map.has(target)) {
      res = Math.min(res, i - map.get(target));
    }
    curr = prefixSum[i] % p;
    map.set(curr, i);
  }
  return res === len ? -1 : res;
}

// 超时
// export default function minSubarray(nums: number[], p: number): number {
//   const len = nums.length;
//   let total = 0;
//   for (let i = 0; i < len; i++) {
//     total += nums[i];
//   }
//   const left = total % p;
//   if (left === 0) return 0;
//   let res = len;
//   for (let i = 0; i < len; i++) {
//     let sum = 0;
//     for (let j = i; j < len; j++) {
//       sum += nums[j];
//       if (j - i + 1 >= res) break;
//       if (sum % p === left && j - i + 1 < res) {
//         res = j - i + 1;
//         break;
//       }
//     }
//   }
//   if (res === len) return -1;
//   return res;
// }
