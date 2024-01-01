import assert from "assert";
import findPeakGrid from "./findPeakGrid";

describe("findPeakGrid", () => {
  it("go", () => {
    assert.equal(
      findPeaks([
        [1, 4],
        [3, 2]
      ]).has(
        findPeakGrid([
          [1, 4],
          [3, 2]
        ]).join(",")
      ),
      true
    );
    assert.equal(
      findPeaks([
        [10, 20, 15],
        [21, 30, 14],
        [7, 16, 32]
      ]).has(
        findPeakGrid([
          [10, 20, 15],
          [21, 30, 14],
          [7, 16, 32]
        ]).join(",")
      ),
      true
    );
    assert.equal(
      findPeaks([
        [10, 50, 40, 30, 20],
        [1, 500, 2, 3, 4]
      ]).has(
        findPeakGrid([
          [10, 50, 40, 30, 20],
          [1, 500, 2, 3, 4]
        ]).join(",")
      ),
      true
    );
  });
});

function findPeaks(grid: number[][]) {
  const rows = grid.length;
  const cols = grid[0].length;
  const set = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const top = i > 0 ? grid[i - 1][j] : -1;
      const right = j < cols - 1 ? grid[i][j + 1] : -1;
      const bottom = i < rows - 1 ? grid[i + 1][j] : -1;
      const left = j > 0 ? grid[i][j - 1] : -1;
      const t = grid[i][j];
      if (t > top && t > right && t > bottom && t > left) {
        set.add(`${i},${j}`);
      }
    }
  }
  return set;
}
