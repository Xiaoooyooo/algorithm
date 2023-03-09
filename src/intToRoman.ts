// 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给你一个整数，将其转为罗马数字。

export default function intToRoman(num: number) {
  const helper = function (num, suffix) {
    let res = "";
    if (num <= 3) {
      res = "I".repeat(num);
    } else if (num === 4) {
      res = "IV";
    } else if (num === 5) {
      res = "V";
    } else if (num > 5 && num <= 8) {
      res = "V" + "I".repeat(num - 5);
    } else if (num === 9) {
      res = "IX";
    }
    if (suffix === 10) {
      res = res.replace(/[IVX]/g, function (match) {
        if (match[0] === "I") return "X";
        if (match[0] === "V") return "L";
        if (match[0] === "X") return "C";
      });
    } else if (suffix === 100) {
      res = res.replace(/[IVX]/g, function (match) {
        if (match[0] === "I") return "C";
        if (match[0] === "V") return "D";
        if (match[0] === "X") return "M";
      });
    } else if (suffix === 1000) {
      res = res.replace(/[I]/g, function (match) {
        if (match[0] === "I") return "M";
      });
    }
    return res;
  };
  const nums = String(num).split("");
  let res = "";
  for (let len = nums.length, i = len - 1; i >= 0; i--) {
    const c = parseInt(nums[i]);
    res = helper(c, Math.pow(10, len - 1 - i)) + res;
  }
  return res;
}
