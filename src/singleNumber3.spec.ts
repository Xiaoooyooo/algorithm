import assert from "assert";
import singleNumber3 from "./singleNumber3";

describe("singleNumber3", () => {
  it("go", () => {
    assert.deepEqual(sort(singleNumber3([1, 2, 1, 3, 2, 5])), [3, 5]);
    assert.deepEqual(sort(singleNumber3([-1, 0])), [-1, 0]);
    assert.deepEqual(sort(singleNumber3([0, 1])), [0, 1]);
  });
});

function sort(nums: number[]) {
  return nums.sort((a, b) => a - b);
}
