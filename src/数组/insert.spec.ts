import assert from "assert";
import insert from "./insert";

describe("insert", () => {
  it("go", () => {
    assert.deepEqual(
      insert(
        [
          [1, 3],
          [6, 9]
        ],
        [2, 5]
      ),
      [
        [1, 5],
        [6, 9]
      ]
    );
    assert.deepEqual(
      insert(
        [
          [1, 3],
          [6, 9]
        ],
        [1, 10]
      ),
      [[1, 10]]
    );
    assert.deepEqual(
      insert(
        [
          [1, 3],
          [6, 9]
        ],
        [1, 6]
      ),
      [[1, 9]]
    );
    assert.deepEqual(
      insert(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16]
        ],
        [4, 8]
      ),
      [
        [1, 2],
        [3, 10],
        [12, 16]
      ]
    );
    assert.deepEqual(insert([[1, 5]], [6, 8]), [
      [1, 5],
      [6, 8]
    ]);
    assert.deepEqual(insert([], [5, 7]), [[5, 7]]);
    assert.deepEqual(insert([[1, 5]], [2, 3]), [[1, 5]]);
    assert.deepEqual(insert([[1, 5]], [2, 7]), [[1, 7]]);
    assert.deepEqual(insert([[1, 5]], [5, 5]), [[1, 5]]);
    assert.deepEqual(insert([[1, 5]], [2, 5]), [[1, 5]]);
  });
});
