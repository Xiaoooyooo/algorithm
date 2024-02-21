import assert from "assert";
import maxResult from "./maxResult";

describe("maxResult", () => {
  it("go", () => {
    assert.equal(maxResult([1, -1, -2, 4, -7, 3], 2), 7);
    assert.equal(maxResult([10, -5, -2, 4, 0, 3], 3), 17);
    assert.equal(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2), 0);
  });
});
