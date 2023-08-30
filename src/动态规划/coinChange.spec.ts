import assert from "assert";
import coinChange from "./coinChange";

describe("coinChange", () => {
  it("go", () => {
    assert.equal(coinChange([1, 2, 5], 11), 3);
    assert.equal(coinChange([2], 3), -1);
    assert.equal(coinChange([1], 0), 0);
    assert.equal(coinChange([186, 419, 83, 408], 6249), 20);
  });
});
