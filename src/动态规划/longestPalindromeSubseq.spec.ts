import assert from "assert";
import longestPalindromeSubseq from "./longestPalindromeSubseq";

describe("longestPalindromeSubseq", () => {
  it("go", () => {
    assert.equal(longestPalindromeSubseq("ba"), 1);
    assert.equal(longestPalindromeSubseq("bb"), 2);
    assert.equal(longestPalindromeSubseq("bab"), 3);
    assert.equal(longestPalindromeSubseq("bbbab"), 4);
    assert.equal(longestPalindromeSubseq("acbbbab"), 5);
    assert.equal(longestPalindromeSubseq("cbbd"), 2);
  });
});
