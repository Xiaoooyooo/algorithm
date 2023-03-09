import assert from "assert";
import isSubsequence from "./isSubsequence";

describe("isSubsequence", () => {
  it("go", () => {
    assert.equal(isSubsequence("abc", "ahbgdc"), true);
    assert.equal(isSubsequence("axc", "ahbgdc"), false);
  });
});
