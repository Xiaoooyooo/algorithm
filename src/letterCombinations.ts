// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 答案可以按 任意顺序 返回。
// 给出数字到字母的映射与电话按键相同。注意 1 不对应任何字母。

export default function letterCombinations(digits: string) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  const arr = digits.split("");
  let res = [];
  while (arr.length > 0) {
    const curr = arr.pop();
    const temp = [];
    for (let i = 0; i < (res.length || 1); i++) {
      for (let j = 0; j < map[curr].length; j++) {
        temp.push(map[curr][j] + (res[i] || ""));
      }
    }
    res = temp;
  }
  return res;
}
