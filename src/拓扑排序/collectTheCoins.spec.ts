import assert from "assert";
import collectTheCoins from "./collectTheCoins";

describe("collectTheCoins", () => {
  it("go", () => {
    assert.equal(
      collectTheCoins(
        [1, 0, 0, 0, 0, 1],
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5]
        ]
      ),
      2
    );
    assert.equal(
      collectTheCoins(
        [0, 0, 0, 1, 1, 0, 0, 1],
        [
          [0, 1],
          [0, 2],
          [1, 3],
          [1, 4],
          [2, 5],
          [5, 6],
          [5, 7]
        ]
      ),
      2
    );
  });
});
