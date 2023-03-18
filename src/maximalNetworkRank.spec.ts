import assert from "assert";
import maximalNetworkRank from "./maximalNetworkRank";

describe("maximalNetworkRank", () => {
  it("go", () => {
    assert.equal(
      maximalNetworkRank(4, [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3]
      ]),
      4
    );
    assert.equal(
      maximalNetworkRank(5, [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3],
        [2, 3],
        [2, 4]
      ]),
      5
    );
    assert.equal(
      maximalNetworkRank(8, [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
        [5, 6],
        [5, 7]
      ]),
      5
    );
    assert.equal(
      maximalNetworkRank(5, [
        [2, 3],
        [0, 3],
        [0, 4],
        [4, 1]
      ]),
      4
    );
  });
});
