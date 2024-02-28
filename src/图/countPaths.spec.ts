import assert from "assert";
import countPaths from "./countPaths";

describe("countPaths", () => {
  it("go", () => {
    assert.equal(
      countPaths(5, [
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5]
      ]),
      4
    );
    assert.equal(
      countPaths(6, [
        [1, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [3, 6]
      ]),
      6
    );
    assert.equal(
      countPaths(4, [
        [1, 2],
        [4, 1],
        [3, 4]
      ]),
      4
    );
  });
});
