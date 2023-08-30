// https://leetcode.cn/problems/find-and-replace-in-string/
// 你会得到一个字符串 s (索引从 0 开始)，你必须对它执行 k 个替换操作。
// 替换操作以三个长度均为 k 的并行数组给出：indices, sources,  targets。
// 要完成第 i 个替换操作:
// 检查 子字符串  sources[i] 是否出现在 原字符串 s 的索引 indices[i] 处。
// 如果没有出现， 什么也不做 。
// 如果出现，则用 targets[i] 替换 该子字符串。
// 例如，如果 s = "abcd" ， indices[i] = 0 , sources[i] = "ab"， targets[i] = "eee" ，
//   那么替换的结果将是 "eeecd" 。
// 所有替换操作必须 同时 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间不会重叠 。
// 例如，一个 s = "abc" ，  indices = [0,1] ， sources = ["ab"，"bc"] 的测试用例将不会生成，
//   因为 "ab" 和 "bc" 替换重叠。
// 在对 s 执行所有替换操作后返回 结果字符串 。
// 子字符串 是字符串中连续的字符序列。

export default function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  const k = indices.length;
  const trans = [];
  function addTrans(index: number) {
    const indice = indices[index],
      source = sources[index],
      target = targets[index];
    let p = trans.length;
    trans[p] = { indice, source, target };
    while (trans[p - 1] && trans[p - 1].indice > indice) {
      [trans[p - 1], trans[p]] = [trans[p], trans[p - 1]];
      p--;
    }
  }
  for (let i = 0; i < k; i++) {
    if (
      s.substring(indices[i], indices[i] + sources[i].length) === sources[i]
    ) {
      addTrans(i);
    }
  }
  let res = "",
    t = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const action = trans[t];
    if (action && i === action.indice) {
      res += action.target;
      i += action.source.length - 1;
      t++;
      continue;
    }
    res += s[i];
  }
  return res;
}

// export default function findReplaceString(
//   s: string,
//   indices: number[], // indices 不一定按升序排列
//   sources: string[],
//   targets: string[]
// ): string {
//   const len = s.length;
//   const k = indices.length;
//   const steps = Array(len).fill(undefined);
//   for (let i = 0; i < k; i++) {
//     steps[indices[i]] = {
//       index: indices[i],
//       source: sources[i],
//       target: targets[i]
//     };
//   }
//   let next = 0;
//   let res = "";
//   for (let i = 0; i < len; i++) {
//     while (next < len && steps[next] === undefined) {
//       next++;
//     }
//     if (steps[next] && i === steps[next].index) {
//       const _len = steps[next].source.length;
//       let temp = "";
//       for (let j = 0; j < _len; j++) {
//         temp += s[i + j];
//       }
//       if (temp === steps[next].source) {
//         res += steps[next].target;
//         i += _len - 1;
//         next++;
//         continue;
//       }
//       next++;
//     }
//     res += s[i];
//   }
//   return res;
// }
