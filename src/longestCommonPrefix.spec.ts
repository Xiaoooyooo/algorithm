import assert from "assert";
import longestCommonPrefix from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  it("go", () => {
    assert.equal(longestCommonPrefix(["asd", "as", "a"]), "a");
    assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
    assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
  });
});
