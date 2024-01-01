import assert from "assert";
import secondGreaterElement from "./secondGreaterElement";

describe("secondGreaterElement", () => {
  it("go", () => {
    assert.deepEqual(secondGreaterElement([2, 4, 0, 9, 6]), [9, 6, 6, -1, -1]);
    assert.deepEqual(secondGreaterElement([3, 3]), [-1, -1]);
  });
});
