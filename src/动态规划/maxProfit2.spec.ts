import assert from "assert";
import maxProfit2 from "./maxProfit2";

describe("maxProfit2", () => {
  it("go", () => {
    assert.equal(maxProfit2([1, 3, 2, 8, 4, 9], 2), 8);
    assert.equal(maxProfit2([1, 3, 7, 5, 10, 3], 3), 6);
  });
});
