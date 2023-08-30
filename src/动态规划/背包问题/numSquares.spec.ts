import assert from "assert";
import numSquares from "./numSquares";

describe("numSquares", () => {
  it("go", () => {
    assert.equal(numSquares(1), 1);
    assert.equal(numSquares(2), 2);
    assert.equal(numSquares(3), 3);
    assert.equal(numSquares(4), 1);
    assert.equal(numSquares(5), 2);
    assert.equal(numSquares(6), 3);
    assert.equal(numSquares(7), 4);
    assert.equal(numSquares(8), 2);
    assert.equal(numSquares(9), 1);
    assert.equal(numSquares(10), 2);
    assert.equal(numSquares(11), 3);
    assert.equal(numSquares(12), 3);
    assert.equal(numSquares(13), 2);
    assert.equal(numSquares(48), 3);
    assert.equal(numSquares(7168), 4);
  });
});
