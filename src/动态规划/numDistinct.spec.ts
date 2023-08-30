import assert from "assert";
import numDistinct from "./numDistinct";

describe("numDistinct", () => {
  it("go", () => {
    assert.equal(numDistinct("a", "a"), 1);
    assert.equal(numDistinct("baba", "b"), 2);
    assert.equal(numDistinct("baba", "ba"), 3);
    assert.equal(numDistinct("baba", "bb"), 1);
    assert.equal(numDistinct("rabbbit", "rabbit"), 3);
    assert.equal(numDistinct("babgbag", "bag"), 5);
    assert.equal(numDistinct("babgbag", "bagg"), 1);
    assert.equal(numDistinct("babgbag", "baggg"), 0);
  });
});
