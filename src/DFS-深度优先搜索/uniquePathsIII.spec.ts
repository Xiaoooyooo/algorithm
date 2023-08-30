import assert from "assert";
import uniquePathsIII from "./uniquePathsIII";

describe("uniquePathsIII", () => {
  it("go", () => {
    assert.equal(
      uniquePathsIII([
        [0, 1],
        [0, 2]
      ]),
      1
    );
    assert.equal(
      uniquePathsIII([
        [0, 1],
        [2, 0]
      ]),
      0
    );
    assert.equal(
      uniquePathsIII([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, -1]
      ]),
      2
    );
    assert.equal(
      uniquePathsIII([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2]
      ]),
      4
    );
    let arr = Array(4)
      .fill(0)
      .map(() => Array(5).fill(0));
    arr[0][0] = 1;
    arr[arr.length - 1][arr[0].length - 1] = 2;
    assert.equal(uniquePathsIII(arr), 20);
  });
});
