import assert from "assert";
import wordBreak from "./wordBreak";

describe("wordBreak", () => {
  it("go", () => {
    assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
    assert.equal(wordBreak("applepenapple", ["apple", "pen"]), true);
    assert.equal(
      wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
      false
    );
  });
});
