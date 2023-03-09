export default function addBinary(a: string, b: string) {
  let len;
  if (a.length > b.length) {
    len = a.length;
    b = b.padStart(len, "0");
  } else {
    len = b.length;
    a = a.padStart(len, "0");
  }
  let res = "",
    temp = 0;
  for (let i = len - 1; i >= 0; i--) {
    const _a = Number(a[i]),
      _b = Number(b[i]);
    const sum = _a + _b + temp;
    if (sum <= 1) {
      res = sum + res;
      temp = 0;
    } else if (sum === 2) {
      temp = 1;
      res = "0" + res;
    } else if (sum === 3) {
      temp = 1;
      res = "1" + res;
    }
  }
  if (temp === 1) res = "1" + res;
  return res;
}
