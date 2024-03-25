import assert from "assert";
import sellingWood from "./sellingWood";

describe("sellingWood", () => {
  it("go", () => {
    assert.equal(
      sellingWood(3, 5, [
        [1, 4, 2],
        [2, 2, 7],
        [2, 1, 3]
      ]),
      19
    );
    assert.equal(
      sellingWood(4, 6, [
        [3, 2, 10],
        [1, 4, 2],
        [4, 1, 3]
      ]),
      32
    );
  });
});
