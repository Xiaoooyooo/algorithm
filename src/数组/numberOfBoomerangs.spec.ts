import assert from "assert";
import numberOfBoomerangs from "./numberOfBoomerangs";

describe("numberOfBoomerangs", () => {
  it("go", () => {
    assert.equal(
      numberOfBoomerangs([
        [0, 0],
        [1, 0],
        [2, 0]
      ]),
      2
    );
    assert.equal(
      numberOfBoomerangs([
        [1, 1],
        [2, 2],
        [3, 3]
      ]),
      2
    );
    assert.equal(numberOfBoomerangs([[1, 1]]), 0);
  });
});
