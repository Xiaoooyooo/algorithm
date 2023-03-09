import assert from "assert";
import maxProfit from "./maxProfit";

describe("maxProfit", () => {
  it("go", () => {
    assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
    assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
  });
});
