import assert from "assert";
import twoSum2 from "./twoSum2";

describe("twoSum2", () => {
  it("go", () => {
    assert.deepEqual(twoSum2([2, 7, 11, 15], 9), [1, 2]);
    assert.deepEqual(twoSum2([2, 3, 4], 6), [1, 3]);
    assert.deepEqual(twoSum2([-1, 0], -1), [1, 2]);
    assert.deepEqual(twoSum2([1, 2, 4, 6, 8, 9], 6), [2, 3]);
    assert.deepEqual(twoSum2([3, 24, 50, 79, 88, 150, 345], 200), [3, 6]);
  });
});
