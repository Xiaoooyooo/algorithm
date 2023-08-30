import assert from "assert";
import longestSubsequence from "./longestSubsequence";

describe("longestSubsequence", () => {
  it("go", () => {
    assert.equal(longestSubsequence([1, 2, 3, 4], 1), 4);
    assert.equal(longestSubsequence([1, 3, 5, 7], 1), 1);
    assert.equal(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2), 4);
  });
});
