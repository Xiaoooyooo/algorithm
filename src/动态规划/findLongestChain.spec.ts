import assert from "assert";
import findLongestChain from "./findLongestChain";

describe("findLongestChain", () => {
  it("go", () => {
    assert.equal(
      findLongestChain([
        [1, 2],
        [2, 3],
        [3, 4]
      ]),
      2
    );
    assert.equal(
      findLongestChain([
        [1, 2],
        [7, 8],
        [4, 5]
      ]),
      3
    );
    assert.equal(
      findLongestChain([
        [1, 2],
        [7, 8],
        [4, 9]
      ]),
      2
    );
  });
});
