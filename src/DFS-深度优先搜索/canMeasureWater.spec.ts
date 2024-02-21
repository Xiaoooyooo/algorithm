import assert from "assert";
import canMeasureWater from "./canMeasureWater";

describe("canMeasureWater", () => {
  it("go", () => {
    assert.equal(canMeasureWater(3, 5, 4), true);
    assert.equal(canMeasureWater(2, 6, 5), false);
    assert.equal(canMeasureWater(1, 2, 3), true);
  });
});
