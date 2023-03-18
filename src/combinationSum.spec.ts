import assert from "assert";
import combinationSum from "./combinationSum";

describe("combinationSum", () => {
  it("go", () => {
    // 顺序
    // assert.deepEqual(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
    // assert.deepEqual(combinationSum([2, 3, 5], 8), [
    //   [2, 2, 2, 2],
    //   [2, 3, 3],
    //   [3, 5]
    // ]);
    assert.deepEqual(combinationSum([2], 1), []);
  });
});
