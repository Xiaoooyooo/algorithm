import assert from "assert";
import hIndex1 from "./hIndex1";

describe("hIndex1", () => {
  it("go", () => {
    assert.equal(hIndex1([0, 1, 3, 5, 6]), 3);
    assert.equal(hIndex1([1, 2, 100]), 2);
    assert.equal(hIndex1([2, 3]), 2);
    assert.equal(hIndex1([1]), 1);
    assert.equal(hIndex1([0]), 0);
    assert.equal(hIndex1([0, 0]), 0);
    assert.equal(hIndex1([1, 1, 1, 1, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10]), 6);
    assert.equal(hIndex1([4, 5, 6, 7, 8, 9, 9, 9, 9, 10]), 7);
  });
});
