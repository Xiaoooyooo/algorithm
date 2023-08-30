import assert, { equal } from "assert";
import longestCommonSubsequence from "./longestCommonSubsequence";

describe("longestCommonSubsequence", () => {
  it("go", () => {
    assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
    assert.equal(longestCommonSubsequence("abc", "abc"), 3);
    assert.equal(longestCommonSubsequence("abc", "def"), 0);
  });
});
