import assert from "assert";
import alternatingSubarray from "./alternatingSubarray";

describe("alternatingSubarray", () => {
  it("go", () => {
    assert.equal(alternatingSubarray([2, 3, 4, 3, 4]), 4);
    assert.equal(alternatingSubarray([4, 5, 6]), 2);
    assert.equal(
      alternatingSubarray([14, 30, 29, 49, 3, 23, 44, 21, 26, 52]),
      -1
    );
  });
});
