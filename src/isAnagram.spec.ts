import assert from "assert";
import isAnagram from "./isAnagram";

describe("isAnagram", () => {
  it("go", () => {
    assert.equal(isAnagram("anagram", "nagaram"), true);
    assert.equal(isAnagram("rat", "car"), false);
  });
});
