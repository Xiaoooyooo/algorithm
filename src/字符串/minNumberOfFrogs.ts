// 链接：https://leetcode.cn/problems/minimum-number-of-frogs-croaking
// 给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。
// 由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 “croak” 。
// 请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。
// 要想发出蛙鸣 "croak"，青蛙必须 依序 输出 ‘c’, ’r’, ’o’, ’a’, ’k’ 这 5 个字母。
// 如果没有输出全部五个字母，那么它就不会发出声音。
// 如果字符串 croakOfFrogs 不是由若干有效的 "croak" 字符混合而成，请返回 -1 。

export default function minNumberOfFrogs(croakOfFrogs: string): number {
  const len = croakOfFrogs.length;
  let count = 0, temp = 0;
  let map = new Map<"c" | "r" | "o" | "a", number>();
  map.set("c", 0);
  map.set("r", 0);
  map.set("o", 0);
  map.set("a", 0);
  for (let i = 0; i < len; i++) {
    const c = croakOfFrogs[i];
    if (c === "c") {
      temp += 1;
      count = Math.max(count, temp);
      map.set("c", map.get("c") + 1);
      continue;
    }
    if (c === "r") {
      if (map.get("c") === 0) return -1;
      map.set("c", map.get("c") - 1);
      map.set("r", map.get("r") + 1);
      continue;
    }
    if (c === "o") {
      if (map.get("r") === 0) return -1;
      map.set("r", map.get("r") - 1);
      map.set("o", map.get("o") + 1);
      continue;
    }
    if (c === "a") {
      if (map.get("o") === 0) return -1;
      map.set("o", map.get("o") - 1);
      map.set("a", map.get("a") + 1);
      continue;
    }
    if (c === "k") {
      if (map.get("a") === 0) return -1;
      temp -= 1;
      map.set("a", map.get("a") - 1);
    }
  }
  return map.get("a") === 0 &&
    map.get("c") === 0 &&
    map.get("o") === 0 &&
    map.get("r") === 0 ? count : -1;
};