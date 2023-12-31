import assert from "assert";
import filterRestaurants from "./filterRestaurants";

describe("filterRestaurants", () => {
  it("go", () => {
    assert.deepEqual(
      filterRestaurants(
        [
          [1, 4, 1, 40, 10],
          [2, 8, 0, 50, 5],
          [3, 8, 1, 30, 4],
          [4, 10, 0, 10, 3],
          [5, 1, 1, 15, 1]
        ],
        1,
        50,
        10
      ),
      [3, 1, 5]
    );
    assert.deepEqual(
      filterRestaurants(
        [
          [1, 4, 1, 40, 10],
          [2, 8, 0, 50, 5],
          [3, 8, 1, 30, 4],
          [4, 10, 0, 10, 3],
          [5, 1, 1, 15, 1]
        ],
        0,
        50,
        10
      ),
      [4, 3, 2, 1, 5]
    );
    assert.deepEqual(
      filterRestaurants(
        [
          [1, 4, 1, 40, 10],
          [2, 8, 0, 50, 5],
          [3, 8, 1, 30, 4],
          [4, 10, 0, 10, 3],
          [5, 1, 1, 15, 1]
        ],
        0,
        30,
        3
      ),
      [4, 5]
    );
  });
});
