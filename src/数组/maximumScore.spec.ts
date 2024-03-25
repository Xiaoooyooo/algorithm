import assert from "assert";
import maximumScore from "./maximumScore";

describe("maximumScore", () => {
  it("go", () => {
    assert.equal(maximumScore([1, 4, 3, 7, 4, 5], 3), 15);
    assert.equal(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0), 20);
  });
});
