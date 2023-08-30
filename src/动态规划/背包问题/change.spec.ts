import assert from "assert";
import change from "./change";

describe("change", () => {
  it("go", () => {
    assert.equal(change(5, [1, 4]), 2);
    assert.equal(change(4, [1, 2, 5]), 3);
    assert.equal(change(5, [1, 2, 5]), 4);
    assert.equal(change(3, [2]), 0);
    assert.equal(change(10, [10]), 1);
    assert.equal(change(0, [7]), 1);
    assert.equal(change(100, [3, 5, 7, 8, 9, 10, 11]), 6606);
    assert.equal(change(500, [1, 2, 3]), 21084);
  });
});
