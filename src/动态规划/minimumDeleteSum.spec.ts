import assert from "assert";
import minimumDeleteSum from "./minimumDeleteSum";

describe("minimumDeleteSum", () => {
  it("go", () => {
    assert.equal(minimumDeleteSum("se", "e"), 115);
    assert.equal(minimumDeleteSum("sea", "eat"), 231);
    assert.equal(minimumDeleteSum("delete", "leet"), 403);
  });
});
