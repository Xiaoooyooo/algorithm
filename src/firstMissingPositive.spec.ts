import assert from "assert";
import firstMissingPositive from "./firstMissingPositive";

describe("firstMissingPositive", () => {
  it("go", () => {
    assert.equal(firstMissingPositive([1, 2, 0]), 3);
    assert.equal(firstMissingPositive([3, 4, -1, 1]), 2);
    assert.equal(firstMissingPositive([7, 8, 9, 11, 12]), 1);
    assert.equal(firstMissingPositive([1, 2, 4, 3, 7]), 5);
    assert.equal(firstMissingPositive([1]), 2);
    assert.equal(firstMissingPositive([1, 1]), 2);
  });
});
