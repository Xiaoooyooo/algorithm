import assert from "assert";
import findPeakElement from "./findPeakElement";

describe("findPeakElement", () => {
  it("go", () => {
    assert.equal(
      has(findPeaks([1, 2, 3, 1]), findPeakElement([1, 2, 3, 1])),
      true
    );
    assert.equal(
      has(
        findPeaks([1, 2, 1, 3, 5, 6, 4]),
        findPeakElement([1, 2, 1, 3, 5, 6, 4])
      ),
      true
    );
  });
});

function findPeaks(nums: number[]) {
  const len = nums.length;
  const set = new Set<number>();
  for (let i = 0; i < len; i++) {
    const l = i > 0 ? nums[i - 1] : -Infinity;
    const r = i < len - 1 ? nums[i + 1] : -Infinity;
    if (nums[i] > l && nums[i] > r) {
      set.add(i);
    }
  }
  return set;
}

function has(set: Set<number>, el: number) {
  return set.has(el);
}
