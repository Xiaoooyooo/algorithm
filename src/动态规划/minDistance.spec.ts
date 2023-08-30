import assert from "assert";
import minDistance from "./minDistance";

describe("minDistance", () => {
  it("go", () => {
    assert.equal(minDistance("a", "a"), 0);
    assert.equal(minDistance("horse", "ros"), 3);
    assert.equal(minDistance("horse", "ross"), 3);
    assert.equal(minDistance("r", "ross"), 3);
    assert.equal(minDistance("rhorse", "ros"), 3);
    assert.equal(minDistance("intention", "execution"), 5);
  });
});
