import assert from "assert";
import minDeletion from "./minDeletion";

describe("minDeletion", () => {
  it("go", () => {
    assert.equal(minDeletion([]), 0);
    assert.equal(minDeletion([1, 1, 2, 3, 5]), 1);
    assert.equal(minDeletion([1, 1, 2, 2, 3, 3]), 2);
    assert.equal(minDeletion([1, 1, 1, 1, 1, 1, 1, 1]), 8);
  });
});
