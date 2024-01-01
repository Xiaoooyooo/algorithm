import assert from "assert";
import minStoneSum from "./minStoneSum";

describe("minStoneSum", () => {
  it("go", () => {
    assert.equal(minStoneSum([5, 4, 9], 2), 12);
    assert.equal(minStoneSum([4, 3, 6, 7], 3), 12);
  });
});
