import assert from "assert";
import minReorder from "./minReorder";

describe("minReorder", () => {
  it("go", () => {
    assert.equal(
      minReorder(6, [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5]
      ]),
      3
    );
    assert.equal(
      minReorder(5, [
        [1, 0],
        [1, 2],
        [3, 2],
        [3, 4]
      ]),
      2
    );
    assert.equal(
      minReorder(3, [
        [1, 0],
        [2, 0]
      ]),
      0
    );
  });
});
