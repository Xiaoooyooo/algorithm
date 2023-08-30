import assert from "assert";
import mostPoints from "./mostPoints";

describe("mostPoints", () => {
  it("go", () => {
    assert.equal(
      mostPoints([
        [3, 2],
        [4, 3],
        [4, 4],
        [2, 5]
      ]),
      5
    );
    assert.equal(
      mostPoints([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
      ]),
      7
    );
    assert.equal(
      mostPoints([
        [12, 46],
        [78, 19],
        [63, 15],
        [79, 62],
        [13, 10]
      ]),
      79
    );
    assert.equal(
      mostPoints([
        [21, 5],
        [92, 3],
        [74, 2],
        [39, 4],
        [58, 2],
        [5, 5],
        [49, 4],
        [65, 3]
      ]),
      157
    );
  });
});
