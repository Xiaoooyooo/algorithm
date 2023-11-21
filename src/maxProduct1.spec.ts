import assert from "assert";
import maxProduct1 from "./maxProduct1";

describe("maxProduct1", () => {
  it("go", () => {
    assert.equal(
      maxProduct1(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]),
      16
    );
    assert.equal(maxProduct1(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]), 4);
    assert.equal(maxProduct1(["a", "aa", "aaa", "aaaa"]), 0);
    // maxProduct1(Array(1000).fill("x".repeat(1000)));
  });
});
