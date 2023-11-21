import assert from "assert";
import maximumInvitations from "./maximumInvitations";

describe("maximumInvitations", () => {
  it("go", () => {
    assert.equal(maximumInvitations([2, 2, 1, 2]), 3);
    assert.equal(maximumInvitations([1, 2, 0]), 3);
    assert.equal(maximumInvitations([3, 0, 1, 4, 1]), 4);
  });
});
