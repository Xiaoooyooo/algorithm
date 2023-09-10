import assert from "assert";
import findOrder from "./findOrder";

describe("findOrder", () => {
  it.only("go", () => {
    assert.deepEqual(findOrder(2, [[1, 0]]), [0, 1]);
    assert.deepEqual(
      findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2]
      ]),
      [0, 1, 2, 3]
      // [0, 2, 1, 3]
    );
    assert.deepEqual(findOrder(1, []), [0]);
  });
});
