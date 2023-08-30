import assert from "assert";
import generateTrees from "./generateTrees";

describe("generateTrees", () => {
  it.skip("go", () => {
    assert.deepEqual(generateTrees(3), [
      [1, null, 2, null, 3],
      [1, null, 3, 2],
      [2, 1, 3],
      [3, 1, null, null, 2],
      [3, 2, null, 1]
    ]);
    assert.deepEqual(generateTrees(1), [[1]]);
  });
});
