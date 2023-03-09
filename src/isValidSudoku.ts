// 链接：https://leetcode.cn/problems/valid-sudoku
// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
//
// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 空白格用 '.' 表示。

export default function isValidSudoku(board: string[][]) {
  const rows = 9,
    cols = 9;
  const colMap = new Map<number, Map<string, boolean>>(),
    cellMap = new Map<number, Map<string, boolean>>();
  for (let i = 0; i < rows; i++) {
    const rowMap = new Map<string, boolean>();
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === ".") continue;
      // check row
      if (rowMap.has(board[i][j])) return false;
      rowMap.set(board[i][j], true);
      // check column
      if (!colMap.has(j)) {
        const t = new Map();
        t.set(board[i][j], true);
        colMap.set(j, t);
      } else {
        const _colMap = colMap.get(j);
        if (_colMap.has(board[i][j])) return false;
        _colMap.set(board[i][j], true);
      }
      // check cell
      const cellNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (!cellMap.get(cellNum)) {
        const t = new Map();
        t.set(board[i][j], true);
        cellMap.set(cellNum, t);
      } else {
        const _cellMap = cellMap.get(cellNum);
        if (_cellMap.has(board[i][j])) return false;
        _cellMap.set(board[i][j], true);
      }
    }
  }
  return true;
}
