import assert from "assert";
import handleQuery from "./handleQuery";

describe("handleQuery", () => {
  it("go", () => {
    assert.deepEqual(
      handleQuery(
        [1, 0, 1],
        [0, 0, 0],
        [
          [1, 1, 1],
          [2, 1, 0],
          [3, 0, 0]
        ]
      ),
      [3]
    );
    assert.deepEqual(
      handleQuery(
        [1],
        [5],
        [
          [2, 0, 0],
          [3, 0, 0]
        ]
      ),
      [5]
    );
  });
});
