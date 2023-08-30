// 给你两个字符串 start 和 target ，长度均为 n 。
// 每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：
// 字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，
// 而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
// 字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
// 如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。

export default function canChange(start: string, target: string): boolean {
  const len = start.length;
  let space1 = 0,
    space2 = 0;
  for (let i = 0, j = 0; i < len || j < len; ) {
    const c1 = start[i],
      c2 = target[j];
    if (c1 === "_" || c2 === "_") {
      if (c1 === "_") {
        space1++;
        i++;
      } else {
        space2++;
        j++;
      }
    }
    if (c1 !== "_" && c2 !== "_") {
      if (c1 !== c2) {
        return false;
      }
      if (c1 === "L" && space1 < space2) {
        return false;
      }
      if (c1 === "R" && space2 < space1) {
        return false;
      }
      i++;
      j++;
    }
  }
  return true;
}

// 官方题解
// export default function canChange(start: string, target: string): boolean {
//   const n = start.length;
//   let i = 0,
//     j = 0;
//   while (i < n && j < n) {
//     while (i < n && start[i] === "_") {
//       i++;
//     }
//     while (j < n && target[j] === "_") {
//       j++;
//     }
//     if (i < n && j < n) {
//       if (start[i] !== target[j]) {
//         return false;
//       }
//       const c = start[i];
//       if ((c === "L" && i < j) || (c === "R" && i > j)) {
//         return false;
//       }
//       i++;
//       j++;
//     }
//   }
//   while (i < n) {
//     if (start[i] !== "_") {
//       return false;
//     }
//     i++;
//   }
//   while (j < n) {
//     if (target[j] !== "_") {
//       return false;
//     }
//     j++;
//   }
//   return true;
// }
