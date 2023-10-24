import assert from "assert";
import countPairs1 from "./countPairs1";

describe("countPairs1", () => {
  it("go", () => {
    assert.equal(
      countPairs1(3, [
        [0, 1],
        [0, 2],
        [1, 2]
      ]),
      0
    );
    assert.equal(
      countPairs1(7, [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4]
      ]),
      14
    );
  });
});
