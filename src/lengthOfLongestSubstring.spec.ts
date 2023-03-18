import assert from "assert";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

describe("lengthOfLongestSubstring", () => {
  it("go", () => {
    assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
    assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
    assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
    assert.equal(lengthOfLongestSubstring(" "), 1);
    assert.equal(lengthOfLongestSubstring(""), 0);
    assert.equal(lengthOfLongestSubstring("abba"), 2);
  });
});
