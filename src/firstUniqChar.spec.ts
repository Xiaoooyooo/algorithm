import assert from "assert";
import firstUniqChar from "./firstUniqChar";

describe("firstUniqChar", () => {
  it("go", () => {
    assert.equal(firstUniqChar("leetcode"), 0);
    assert.equal(firstUniqChar("loveleetcode"), 2);
    assert.equal(firstUniqChar("aabb"), -1);
  });
});
