import assert from "assert";
import longestWPI from "./longestWPI";

describe("longestWPI", () => {
  it("go", () => {
    assert.equal(longestWPI([9, 9, 6, 0, 6, 6, 9]), 3);
    assert.equal(longestWPI([6, 6, 6]), 0);
    assert.equal(longestWPI([6, 6, 9]), 1);
  });
});
