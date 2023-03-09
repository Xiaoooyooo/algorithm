// 链接：https://leetcode.cn/problems/ransom-note
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 哈希表
// export default function canConstruct(ransomNote: string, magazine: string) {
//   const map = new Map<string, number>();
//   for (let i = 0, len = magazine.length; i < len; i++) {
//     const s = magazine[i];
//     if (!map.has(s)) {
//       map.set(s, 1);
//     } else {
//       map.set(s, map.get(s) + 1);
//     }
//   }
//   for (let i = 0, len = ransomNote.length; i < len; i++) {
//     const s = ransomNote[i];
//     if (!map.has(s)) return false;
//     const available = map.get(s);
//     if (available === 0) return false;
//     map.set(s, available - 1);
//   }
//   return true;
// }

// 哈希表，但是用数组存储
export default function canConstruct(ransomNote: string, magazine: string) {
  const arr = Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let i = 0, len = magazine.length; i < len; i++) {
    const index = magazine[i].charCodeAt(0);
    arr[index - base] += 1;
  }
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    const index = ransomNote[i].charCodeAt(0);
    if (arr[index - base] === 0) return false;
    arr[index - base] -= 1;
  }
  return true;
}
