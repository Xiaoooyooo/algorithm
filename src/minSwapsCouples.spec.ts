import assert from "assert";
import minSwapsCouples from "./minSwapsCouples";

describe("minSwapsCouples", () => {
  it("go", () => {
    assert.equal(minSwapsCouples([0, 2, 1, 3]), 1);
    assert.equal(minSwapsCouples([3, 2, 0, 1]), 0);
  });
});
