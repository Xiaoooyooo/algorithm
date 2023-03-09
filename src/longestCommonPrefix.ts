export default function longestCommonPrefix(strs) {
  const len = strs.length;
  let res = "",
    curr = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let c = "",
      flag = false;
    for (let i = 0; i < len; i++) {
      if (!strs[i][curr]) {
        flag = true;
        break;
      }
      if (i === 0) {
        c = strs[i][curr];
      } else {
        if (strs[i][curr] !== c) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      break;
    } else {
      res += c;
      curr++;
    }
  }
  return res;
}
