import assert from "assert";
import uniqueLetterString from "./uniqueLetterString";

describe("uniqueLetterString", () => {
  it("go", () => {
    assert.equal(uniqueLetterString("ABC"), 10);
    assert.equal(uniqueLetterString("ABA"), 8);
    assert.equal(uniqueLetterString("LEETCODE"), 92);
  });
});
