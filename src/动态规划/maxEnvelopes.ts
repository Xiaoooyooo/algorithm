// https://leetcode.cn/problems/russian-doll-envelopes/
// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
// 注意：不允许旋转信封。

// * 动态规划 二分查找
export default function maxEnvelopes(envelopes: number[][]): number {
  //首先我们将所有的信封按照 w 值第一关键字升序、h 值第二关键字降序进行排序；
  // 随后我们就可以忽略 w 维度，求出 h 维度的最长严格递增子序列，其长度即为答案。
  const n = envelopes.length;
  if (n === 0) return 0;

  envelopes.sort((a, b) => {
    if (a[0] - b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const f = [envelopes[0][1]];
  for (let i = 1; i < n; i++) {
    const num = envelopes[i][1];
    if (num > f[f.length - 1]) {
      f.push(num);
    } else {
      // 当在遍历相同 w 的 h 时，更新的是 f[f.length - 1]，即 f 最末尾的值。
      // 如果遍历到了下一组 w 的第一个 h，
      // 则这个数其实可以舍掉，或是在 f 的前面找个位置替换，这两种方式都对 f 的长度没有影响
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }
  function binarySearch(f: number[], target: number) {
    let low = 0,
      high = f.length - 1;
    while (low < high) {
      const mid = ((high - low) >> 1) + low;
      if (f[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  return f.length;
}

// 动态规划 O(n^2) 超时
// export default function maxEnvelopes(envelopes: number[][]): number {
//   envelopes.sort((a, b) => a[0] - b[0]);
//   const len = envelopes.length;
//   const dp = Array(len).fill(1);
//   let max = 1;
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (
//         envelopes[i][0] > envelopes[j][0] &&
//         envelopes[i][1] > envelopes[j][1]
//       ) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(max, dp[i]);
//   }
//   console.log(envelopes);
//   // console.log(dp);
//   return max;
// }
