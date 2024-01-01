import assert from "assert";
import minOperationsMaxProfit from "./minOperationsMaxProfit";

describe("minOperationsMaxProfit", () => {
  it("go", () => {
    assert.equal(minOperationsMaxProfit([8, 3], 5, 6), 3);
    assert.equal(minOperationsMaxProfit([10, 9, 6], 6, 4), 7);
    assert.equal(minOperationsMaxProfit([3, 4, 0, 5, 1], 1, 92), -1);
  });
});
