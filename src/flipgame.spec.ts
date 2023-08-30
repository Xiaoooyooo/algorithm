import assert from "assert";
import flipgame from "./flipgame";

describe("flipgame", () => {
  it("go", () => {
    assert.equal(flipgame([1, 2, 4, 4, 7], [1, 3, 4, 1, 3]), 2);
    assert.equal(flipgame([1, 2, 4, 4, 7], [1, 3, 2, 1, 3]), 2);
    assert.equal(flipgame([1], [1]), 0);
    assert.equal(flipgame([2, 2], [2, 2]), 0);
  });
});
