import assert from "assert";
import canConstruct from "./canConstruct";

describe("canConstruct", () => {
  it("go", () => {
    assert.equal(canConstruct("a", "b"), false);
    assert.equal(canConstruct("aa", "ab"), false);
    assert.equal(canConstruct("aa", "aab"), true);
  });
});
