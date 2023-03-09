import assert from "assert";

import mergeSimilarItems from "./mergeSimilarItems";

describe("mergeSimilarItems", () => {
  it("go", () => {
    assert.deepEqual(
      mergeSimilarItems(
        [
          [1, 1],
          [4, 5],
          [3, 8]
        ],
        [
          [3, 1],
          [1, 5]
        ]
      ),
      [
        [1, 6],
        [3, 9],
        [4, 5]
      ]
    );
    assert.deepEqual(
      mergeSimilarItems(
        [
          [1, 1],
          [3, 2],
          [2, 3]
        ],
        [
          [2, 1],
          [3, 2],
          [1, 3]
        ]
      ),
      [
        [1, 4],
        [2, 4],
        [3, 4]
      ]
    );
    assert.deepEqual(
      mergeSimilarItems(
        [
          [1, 3],
          [2, 2]
        ],
        [
          [7, 1],
          [2, 2],
          [1, 4]
        ]
      ),
      [
        [1, 7],
        [2, 4],
        [7, 1]
      ]
    );
  });
});
