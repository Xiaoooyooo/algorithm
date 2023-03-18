import assert from "assert";
import minNumberOfHours from "./minNumberOfHours";

describe("minNumberOfHours", () => {
  it("go", () => {
    assert.equal(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1]), 8);
    assert.equal(minNumberOfHours(2, 4, [1], [3]), 0);
    assert.equal(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50]), 51);
  });
});
