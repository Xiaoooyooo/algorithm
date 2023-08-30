import assert from "assert";
import minInsertions from "./minInsertions";

describe("minInsertions", () => {
  it("go", () => {
    assert.equal(minInsertions("a"), 0);
    assert.equal(minInsertions("ab"), 1);
    assert.equal(minInsertions("aba"), 0);
    assert.equal(minInsertions("abc"), 2);
    assert.equal(minInsertions("zzazz"), 0);
    assert.equal(minInsertions("zzaz"), 1);
    assert.equal(minInsertions("zazz"), 1);
    assert.equal(minInsertions("mbadm"), 2);
    assert.equal(minInsertions("madm"), 1);
    assert.equal(minInsertions("leetcode"), 5);
    assert.equal(minInsertions("zjveiiwvc"), 5);
  });
});
