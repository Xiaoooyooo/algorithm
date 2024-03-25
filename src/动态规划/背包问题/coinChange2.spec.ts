import assert from "assert";
import change from "./coinChange2";

describe("coinChange2", () => {
  it("go", () => {
    assert.equal(change(5, [1, 2, 5]), 4);
    assert.equal(change(3, [2]), 0);
    assert.equal(change(10, [10]), 1);
    assert.equal(change(500, [3, 5, 7, 8, 9, 10, 11]), 35502874);
  });
});
