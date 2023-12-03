import assert from "assert";
import maxScore from "./maxScore";

describe("maxScore", () => {
  it.only("go", () => {
    assert.equal(maxScore([1, 2, 3, 4, 5, 6, 1], 3), 12);
    assert.equal(maxScore([2, 2, 2], 2), 4);
    assert.equal(maxScore([9, 7, 7, 9, 7, 7, 9], 7), 55);
    assert.equal(maxScore([1, 1000, 1], 1), 1);
    assert.equal(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3), 202);
  });
});
