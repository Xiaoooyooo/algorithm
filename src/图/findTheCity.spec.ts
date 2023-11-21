import assert from "assert";
import findTheCity from "./findTheCity";

describe("findTheCity", () => {
  it("go", () => {
    assert.equal(
      findTheCity(
        4,
        [
          [0, 1, 3],
          [1, 2, 1],
          [1, 3, 4],
          [2, 3, 1]
        ],
        4
      ),
      3
    );
    assert.equal(
      findTheCity(
        5,
        [
          [0, 1, 2],
          [0, 4, 8],
          [1, 2, 3],
          [1, 4, 2],
          [2, 3, 1],
          [3, 4, 1]
        ],
        2
      ),
      0
    );
    assert.equal(
      findTheCity(
        6,
        [
          [0, 1, 10],
          [0, 2, 1],
          [2, 3, 1],
          [1, 3, 1],
          [1, 4, 1],
          [4, 5, 10]
        ],
        20
      ),
      5
    );
    assert.equal(
      findTheCity(
        6,
        [
          [0, 3, 7],
          [2, 4, 1],
          [0, 1, 5],
          [2, 3, 10],
          [1, 3, 6],
          [1, 2, 1]
        ],
        417
      ),
      5
    );
  });
});
