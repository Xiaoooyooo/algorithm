import assert from "assert";
import checkValidGrid from "./checkValidGrid";

describe("checkValidGrid", () => {
  it.only("go", () => {
    assert.equal(
      checkValidGrid([
        [0, 11, 16, 5, 20],
        [17, 4, 19, 10, 15],
        [12, 1, 8, 21, 6],
        [3, 18, 23, 14, 9],
        [24, 13, 2, 7, 22]
      ]),
      true
    );
    assert.equal(
      checkValidGrid([
        [0, 3, 6],
        [5, 8, 1],
        [2, 7, 4]
      ]),
      false
    );
  });
});
