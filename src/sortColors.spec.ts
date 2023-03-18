import assert from "assert";
import sortColors from "./sortColors";

describe("sortColors", () => {
  it("go", () => {
    let nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    assert.deepEqual(nums, [0, 0, 1, 1, 2, 2]);
    //
    nums = [2, 0, 1];
    sortColors(nums);
    assert.deepEqual(nums, [0, 1, 2]);
    //
    nums = [0, 2, 2, 1, 1, 0];
    sortColors(nums);
    assert.deepEqual(nums, [0, 0, 1, 1, 2, 2]);
    //
    nums = [0, 2, 1, 2, 1, 0];
    sortColors(nums);
    assert.deepEqual(nums, [0, 0, 1, 1, 2, 2]);
    //
    nums = [1, 0];
    sortColors(nums);
    assert.deepEqual(nums, [0, 1]);
  });
});
