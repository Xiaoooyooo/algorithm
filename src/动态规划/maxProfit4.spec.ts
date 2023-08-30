import assert from "assert";
import maxProfit4 from "./maxProfit4";

describe("maxProfit4", () => {
  it("go", () => {
    assert.equal(maxProfit4(2, [2, 4, 1]), 2);
    assert.equal(maxProfit4(2, [3, 2, 6, 5, 0, 3]), 7);
    assert.equal(maxProfit4(2, [3, 3, 5, 0, 0, 3, 1, 4]), 6);
  });
});
