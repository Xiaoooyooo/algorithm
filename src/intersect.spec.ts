import assert from "assert";
import intersect from "./intersect";

describe("intersect", () => {
  it("go", () => {
    // 结果排个序
    assert.deepEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
    assert.deepEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
  });
});
