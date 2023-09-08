import assert from "assert";
import numDecodings from "./numDecodings";

describe("numDecodings", () => {
  it("go", () => {
    assert.equal(numDecodings("12"), 2);
    assert.equal(numDecodings("226"), 3);
    assert.equal(numDecodings("06"), 0);
    assert.equal(numDecodings("111"), 3);
    assert.equal(numDecodings("11106"), 2);
    assert.equal(numDecodings("1002"), 0);
  });
});
