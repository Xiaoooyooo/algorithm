import assert from "assert";
import minIncrements from "./minIncrements";

describe("minIncrements", () => {
  it("go", () => {
    assert.equal(minIncrements(7, [1, 5, 2, 2, 3, 3, 1]), 6);
    assert.equal(minIncrements(3, [5, 3, 3]), 0);
  });
});
