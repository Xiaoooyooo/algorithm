export default function largeGroupPositions(s: string) {
  const res = [],
    len = s.length;
  if (len <= 2) return res;
  let start = 0,
    end = 1;
  for (let i = 0; i < len; i++) {
    if (s[start] === s[end]) {
      end++;
    } else {
      if (end - 1 - start >= 2) {
        res.push([start, end - 1]);
      }
      [start, end] = [end, end + 1];
    }
  }
  if (end - start >= 2) {
    res.push([start, end]);
  }
  return res;
}
