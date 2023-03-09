import assert from "assert";
import setZeroes from "./setZeroes";

describe("setZeroes", () => {
  it("go", () => {
    const matrix1 = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ];
    setZeroes(matrix1);
    assert.deepEqual(matrix1, [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ]);

    const matrix2 = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
    ];
    setZeroes(matrix2);
    assert.deepEqual(matrix2, [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0]
    ]);

    const matrix3 = [
      [1, 2, 3, 4],
      [5, 0, 7, 8],
      [0, 10, 11, 12],
      [13, 14, 15, 0]
    ];
    setZeroes(matrix3);
    assert.deepEqual(matrix3, [
      [0, 0, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);

    const matrix4 = [
      [0, 0, 0, 5],
      [4, 3, 1, 4],
      [0, 1, 1, 4],
      [1, 2, 1, 3],
      [0, 0, 1, 1]
    ];
    setZeroes(matrix4);
    assert.deepEqual(matrix4, [
      [0, 0, 0, 0],
      [0, 0, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ]);
  });
});
