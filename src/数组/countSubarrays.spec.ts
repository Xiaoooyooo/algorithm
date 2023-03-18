import assert from "assert";
import countSubarrays from "./countSubarrays";

describe("countSubarrays", () => {
  it("go", () => {
    assert.equal(countSubarrays([3, 2, 1, 4, 5], 4), 3);
    assert.equal(countSubarrays([3, 2, 1, 4, 5], 5), 1);
    assert.equal(countSubarrays([1, 2, 3, 4, 5], 3), 5);
    assert.equal(countSubarrays([2, 3, 1], 3), 1);
    assert.equal(countSubarrays([2, 5, 1, 4, 3, 6], 1), 3);
    assert.equal(
      countSubarrays(
        [5, 19, 11, 15, 13, 16, 4, 6, 2, 7, 10, 8, 18, 20, 1, 3, 17, 9, 12, 14],
        6
      ),
      13
    );
  });
});
