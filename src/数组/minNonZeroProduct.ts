//  https://leetcode.cn/problems/minimum-non-zero-product-of-the-array-elements/description/
// 给你一个正整数 p 。你有一个下标从 1 开始的数组 nums ，这个数组包含范围 [1, 2^p - 1] 内所有整数的二进制形式（两端都 包含）。你可以进行以下操作 任意 次：
// 从 nums 中选择两个元素 x 和 y  。
// 选择 x 中的一位与 y 对应位置的位交换。对应位置指的是两个整数 相同位置 的二进制位。
// 比方说，如果 x = 1101 且 y = 0011 ，交换右边数起第 2 位后，我们得到 x = 1111 和 y = 0001 。
// 请你算出进行以上操作 任意次 以后，nums 能得到的 最小非零 乘积。将乘积对 109 + 7 取余 后返回。
// 注意：答案应为取余 之前 的最小值。

// 官方题解：贪心
export default function minNonZeroProduct(p: number): number {
  /**
   * 考虑任意两个数 a b，它们更新前后之差为：
   * ab - (a - x)(b + x)
   * ab - (ab + ax - bx - x * x)
   * bx + x * x - ax
   * x(b - a + x)
   * 其中 x 为缩小的值，可视为常数
   * 要想使整体缩小的值更大
   * 那么其中的 b - a 应尽可能的大
   * 因此得出结论：优先缩小最小的值，优先增大最大的值
   */
  if (p === 1) {
    return 1;
  }
  // 快速幂
  const fastpow = (x: bigint, n: bigint, mod: bigint): bigint => {
    let res: bigint = BigInt(1);
    while (n > BigInt(0)) {
      if (n & BigInt(1)) {
        res = (res * x) % mod;
      }
      x = (x * x) % mod;
      n >>= BigInt(1);
    }
    return res;
  };

  const mod = BigInt(1e9 + 7);
  const x = fastpow(BigInt(2), BigInt(p), mod) - BigInt(1);
  const y = BigInt(1) << BigInt(p - 1);
  return Number((fastpow(x - BigInt(1), y - BigInt(1), mod) * x) % mod);
}

/**
 * 思路一（不行）
 * a >= x
 * a * b > (a - x) * (b + x)
 * a * b > ab + ax - bx - x * x
 * ax - bx - x * x < 0
 * a - b - x < 0
 * a - b < x
 */
