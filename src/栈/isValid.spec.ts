import assert from "assert";
import isValid from "./isValid";

describe("isValid", () => {
  it("go", () => {
    assert.equal(isValid("()"), true);
    assert.equal(isValid("()[]{}"), true);
    assert.equal(isValid("(]"), false);
  });
});
