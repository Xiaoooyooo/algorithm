// https://leetcode.cn/problems/count-the-repetitions/
// 定义 str = [s, n] 表示 str 由 n 个字符串 s 连接构成。
// 例如，str == ["abc", 3] =="abcabcabc" 。
// 如果可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。
// 例如，根据定义，s1 = "abc" 可以从 s2 = "abdbec" 获得，仅需要删除加粗且用斜体标识的字符。
// 现在给你两个字符串 s1 和 s2 和两个整数 n1 和 n2 。由此构造得到两个字符串，其中 str1 = [s1, n1]、str2 = [s2, n2] 。
// 请你找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得。

export default function getMaxRepetitions(
  s1: string,
  n1: number,
  s2: string,
  n2: number
): number {
  if (n1 === 0) {
    return 0;
  }
  let s1cnt = 0,
    index = 0,
    s2cnt = 0;
  // recall 是我们用来找循环节的变量，它是一个哈希映射
  // 我们如何找循环节？假设我们遍历了 s1cnt 个 s1，此时匹配到了第 s2cnt 个 s2 中的第 index 个字符
  // 如果我们之前遍历了 s1cnt' 个 s1 时，匹配到的是第 s2cnt' 个 s2 中同样的第 index 个字符，那么就有循环节了
  // 我们用 (s1cnt', s2cnt', index) 和 (s1cnt, s2cnt, index) 表示两次包含相同 index 的匹配结果
  // 那么哈希映射中的键就是 index，值就是 (s1cnt', s2cnt') 这个二元组
  // 循环节就是；
  //    - 前 s1cnt' 个 s1 包含了 s2cnt' 个 s2
  //    - 以后的每 (s1cnt - s1cnt') 个 s1 包含了 (s2cnt - s2cnt') 个 s2
  // 那么还会剩下 (n1 - s1cnt') % (s1cnt - s1cnt') 个 s1, 我们对这些与 s2 进行暴力匹配
  // 注意 s2 要从第 index 个字符开始匹配
  const recall = new Map<number, number[]>();
  let preLoop = [0, 0];
  let inLoop = [0, 0];
  // eslint-disable-next-line
  while (true) {
    // 我们多遍历一个 s1，看看能不能找到循环节
    ++s1cnt;
    for (let i = 0; i < s1.length; ++i) {
      const ch = s1[i];
      if (ch == s2[index]) {
        index += 1;
        if (index == s2.length) {
          ++s2cnt;
          index = 0;
        }
      }
    }
    // 还没有找到循环节，所有的 s1 就用完了
    if (s1cnt == n1) {
      return Math.floor(s2cnt / n2);
    }
    // 出现了之前的 index，表示找到了循环节
    if (recall.has(index)) {
      const value = recall.get(index);
      const s1cntPrime = value[0];
      const s2cntPrime = value[1];
      // 前 s1cnt' 个 s1 包含了 s2cnt' 个 s2
      preLoop = [s1cntPrime, s2cntPrime];
      // 以后的每 (s1cnt - s1cnt') 个 s1 包含了 (s2cnt - s2cnt') 个 s2
      inLoop = [s1cnt - s1cntPrime, s2cnt - s2cntPrime];
      break;
    } else {
      recall.set(index, [s1cnt, s2cnt]);
    }
  }
  // ans 存储的是 S1 包含的 s2 的数量，考虑的之前的 preLoop 和 inLoop
  let ans = preLoop[1] + Math.floor((n1 - preLoop[0]) / inLoop[0]) * inLoop[1];
  // S1 的末尾还剩下一些 s1，我们暴力进行匹配
  const rest = (n1 - preLoop[0]) % inLoop[0];
  for (let i = 0; i < rest; ++i) {
    for (let j = 0; j < s1.length; ++j) {
      const ch = s1[j];
      if (ch == s2[index]) {
        ++index;
        if (index == s2.length) {
          ++ans;
          index = 0;
        }
      }
    }
  }
  // S1 包含 ans 个 s2，那么就包含 ans / n2 个 S2
  return Math.floor(ans / n2);
}

// 超时
// export default function getMaxRepetitions(
//   s1: string,
//   n1: number,
//   s2: string,
//   n2: number
// ): number {
//   const len1 = s1.length;
//   const len2 = s2.length;
//   const m = len1 * n1;
//   const n = len2 * n2;
//   let i = 0;
//   let j = 0;
//   let res = 0;
//   while (i < m) {
//     const _i = i % len1;
//     const _j = j % len2;
//     if (s1[_i] === s2[_j]) {
//       j++;
//       if (j % n === 0) {
//         res++;
//       }
//     }
//     i++;
//   }
//   return res;
// }
