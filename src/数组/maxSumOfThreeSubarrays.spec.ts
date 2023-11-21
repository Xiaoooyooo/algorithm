import assert from "assert";
import maxSumOfThreeSubarrays from "./maxSumOfThreeSubarrays";

describe("maxSumofThreeSubarrays", () => {
  it("go", () => {
    assert.deepEqual(
      maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2),
      [0, 3, 5]
    );
    assert.deepEqual(
      maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2),
      [0, 2, 4]
    );
  });
});
