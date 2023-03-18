import assert from "assert";
import moveZeroes from "./moveZeroes";

describe("moveZeroes", () => {
  it("go", () => {
    let nums;
    nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    assert.deepEqual(nums, [1, 3, 12, 0, 0]);
    nums = [0];
    moveZeroes(nums);
    assert.deepEqual(nums, [0]);
    nums = [1, 0, 3, 2, 0, 4, 0, 0];
    moveZeroes(nums);
    assert.deepEqual(nums, [1, 3, 2, 4, 0, 0, 0, 0]);
  });
});
