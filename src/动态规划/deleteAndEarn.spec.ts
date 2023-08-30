import assert from "assert";
import deleteAndEarn from "./deleteAndEarn";

describe("deleteAndEarn", () => {
  it("go", () => {
    assert.equal(deleteAndEarn([1, 1, 1]), 3);
    assert.equal(deleteAndEarn([3, 1]), 4);
    assert.equal(deleteAndEarn([2, 1]), 2);
    assert.equal(deleteAndEarn([3, 4, 2]), 6);
    assert.equal(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9);
    assert.equal(deleteAndEarn([1, 1, 1, 2]), 3);
    assert.equal(deleteAndEarn([2, 2, 3, 4, 4]), 12);
    assert.equal(deleteAndEarn([1, 2, 3]), 4);
    assert.equal(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]), 37);
    assert.equal(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10, 9, 9]), 45);
  });
});
