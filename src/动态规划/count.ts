// https://leetcode.cn/problems/count-of-integers/description/
// 给你两个数字字符串 num1 和 num2 ，以及两个整数 max_sum 和 min_sum 。
// 如果一个整数 x 满足以下条件，我们称它是一个好整数：
// num1 <= x <= num2
// min_sum <= digit_sum(x) <= max_sum.
// 请你返回好整数的数目。答案可能很大，请返回答案对 109 + 7 取余后的结果。
// 注意，digit_sum(x) 表示 x 各位数字之和。

// * 官方题解 数位dp
export default function count(
  num1: string,
  num2: string,
  min_sum: number,
  max_sum: number
): number {
  const N: number = 23;
  const M: number = 401;
  const MOD: number = 1000000007;
  const d: number[][] = new Array(N)
    .fill(null)
    .map(() => new Array(M).fill(-1));

  const dfs = (num: string, i: number, j: number, limit: boolean): number => {
    if (j > max_sum) {
      return 0;
    }
    if (i === -1) {
      return j >= min_sum ? 1 : 0;
    }
    if (!limit && d[i][j] !== -1) {
      return d[i][j];
    }

    let res: number = 0;
    const up: number = limit ? num.charCodeAt(i) - "0".charCodeAt(0) : 9;
    for (let x = 0; x <= up; x++) {
      res = (res + dfs(num, i - 1, j + x, limit && x === up)) % MOD;
    }

    if (!limit) {
      d[i][j] = res;
    }
    return res;
  };

  const get = (num: string): number => {
    num = num.split("").reverse().join("");
    return dfs(num, num.length - 1, 0, true);
  };

  // 求解 num - 1，先把最后一个非 0 字符减去 1，再把后面的 0 字符变为 9
  const sub = (num: string): string => {
    let i: number = num.length - 1;
    const arr: string[] = num.split("");
    while (arr[i] === "0") {
      i--;
    }
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
    i++;
    while (i < num.length) {
      arr[i] = "9";
      i++;
    }
    return arr.join("");
  };

  return (get(num2) - get(sub(num1)) + MOD) % MOD;
}
