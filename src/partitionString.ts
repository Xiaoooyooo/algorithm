export default function partitionString(s) {
  const len = s.length;
  const res = [];
  let temp = "";
  for (let i = 0; i < len; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp += s[i];
    } else {
      res.push(temp);
      temp = s[i];
    }
  }
  res.push(temp);
  // console.log(res);
  return res.length;
}
