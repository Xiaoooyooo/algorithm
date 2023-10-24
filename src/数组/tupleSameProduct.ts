// https://leetcode.cn/problems/tuple-with-same-product/
// 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。
// 其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。

// 官方题解 哈希表
export default function tupleSameProduct(nums: number[]): number {
  const n = nums.length;
  const cnt = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const key = nums[i] * nums[j];
      cnt.set(key, (cnt.get(key) || 0) + 1);
    }
  }
  let ans = 0;
  for (const v of cnt.values()) {
    ans += v * (v - 1) * 4;
  }
  return ans;
}

// export default function tupleSameProduct(nums: number[]): number {
//   const len = nums.length;
//   nums.sort((a, b) => a - b);
//   let res = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = len - 1; j > i; j--) {
//       const target = nums[i] * nums[j];
//       for (let k = i + 1; k < j; k++) {
//         const t = target / nums[k];
//         if (t % 1 !== 0) continue;
//         for (let l = k + 1; l < j; l++) {
//           if (nums[l] === t) res += 8;
//         }
//       }
//     }
//   }
//   return res;
// }
