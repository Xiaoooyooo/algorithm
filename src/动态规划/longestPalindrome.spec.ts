import assert from "assert";
import longestPalindrome from "./longestPalindrome";

describe("longestPalindrome", () => {
  it("go", () => {
    assert.equal(longestPalindrome("aa"), "aa");
    assert.equal(longestPalindrome("aaa"), "aaa");
    assert.equal(["bab", "aba"].includes(longestPalindrome("babad")), true);
    assert.equal(longestPalindrome("cbbd"), "bb");
    assert.equal(longestPalindrome("cbbdw"), "bb");
    assert.equal(longestPalindrome("acaa"), "aca");
    assert.equal(longestPalindrome("aacabdkacaa"), "aca");
  });
});
