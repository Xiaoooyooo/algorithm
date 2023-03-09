import assert from "assert";

import largestLocal from "./largestLocal";

describe("largestLocal", () => {
  it("go", () => {
    assert.deepEqual(
      largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2]
      ]),
      [
        [9, 9],
        [8, 6]
      ]
    );
    assert.deepEqual(
      largestLocal([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]),
      [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ]
    );
  });
});
