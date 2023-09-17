import assert from "assert";
import rob from "./rob";

describe("rob", () => {
  it("go", () => {
    assert.equal(rob([2, 3, 2]), 3);
    assert.equal(rob([1, 2, 3, 1]), 4);
    assert.equal(rob([1, 2, 3]), 3);
    assert.equal(rob([2, 3]), 3);
    assert.equal(rob([1, 2, 1, 1]), 3);
    assert.equal(rob([200, 3, 140, 20, 10]), 340);
  });
});
