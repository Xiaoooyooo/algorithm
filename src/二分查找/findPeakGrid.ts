// https://leetcode.cn/problems/find-a-peak-element-ii/
// 一个 2D 网格中的 峰值 是指那些 严格大于 其相邻格子(上、下、左、右)的元素。
// 给你一个 从 0 开始编号 的 m x n 矩阵 mat ，其中任意两个相邻格子的值都 不相同 。找出 任意一个 峰值 mat[i][j] 并 返回其位置 [i,j] 。
// 你可以假设整个矩阵周边环绕着一圈值为 -1 的格子。
// 要求必须写出时间复杂度为 O(m log(n)) 或 O(n log(m)) 的算法

export default function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length;
  let low = 0,
    high = m - 1;
  while (low <= high) {
    const i = Math.floor((low + high) / 2);
    const j = maxElement(mat[i]);
    if (i - 1 >= 0 && mat[i][j] < mat[i - 1][j]) {
      high = i - 1;
      continue;
    }
    if (i + 1 < m && mat[i][j] < mat[i + 1][j]) {
      low = i + 1;
      continue;
    }
    return [i, j];
  }

  function maxElement(arr: number[]) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        i = j;
      }
    }
    return i;
  }

  return []; // impossible
}
