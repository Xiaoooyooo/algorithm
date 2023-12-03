import assert from "assert";
import closeStrings from "./closeStrings";

describe("closeStrings", () => {
  it("go", () => {
    assert.equal(closeStrings("abc", "bca"), true);
    assert.equal(closeStrings("a", "aa"), false);
    assert.equal(closeStrings("cabbba", "abbccc"), true);
    assert.equal(closeStrings("cabbba", "aabbss"), false);
    assert.equal(closeStrings("uau", "ssx"), false);
  });
});
