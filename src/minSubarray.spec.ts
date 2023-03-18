import assert from "assert";
import minSubarray from "./minSubarray";

describe("minSubarray", () => {
  it("go", () => {
    assert.equal(minSubarray([3, 1, 4, 2], 6), 1);
    assert.equal(minSubarray([6, 3, 5, 2], 9), 2);
    assert.equal(minSubarray([1, 2, 3], 3), 0);
    assert.equal(minSubarray([1, 2, 3], 7), -1);
    assert.equal(minSubarray([1000000000, 1000000000, 1000000000], 3), 0);
    assert.equal(
      minSubarray(
        [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2],
        148
      ),
      7
    );
  });
});
