import assert from "assert";
import fullBloomFlowers from "./fullBloomFlowers";

describe("fullBloomFlowers", () => {
  it("go", () => {
    assert.deepEqual(
      fullBloomFlowers(
        [
          [1, 6],
          [3, 7],
          [9, 12],
          [4, 13]
        ],
        [2, 3, 7, 11]
      ),
      [1, 2, 2, 2]
    );
    assert.deepEqual(
      fullBloomFlowers(
        [
          [1, 10],
          [3, 3]
        ],
        [3, 3, 2]
      ),
      [2, 2, 1]
    );
    assert.deepEqual(
      fullBloomFlowers(
        [
          [19, 37],
          [19, 38],
          [19, 35]
        ],
        [6, 7, 21, 1, 13, 37, 5, 37, 46, 43]
      ),
      [0, 0, 3, 0, 0, 2, 0, 2, 0, 0]
    );
  });
});
