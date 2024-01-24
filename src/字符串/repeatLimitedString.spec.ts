import assert from "assert";
import repeatLimitedString from "./repeatLimitedString";

describe("repeatLimitedString", () => {
  it("go", () => {
    assert.equal(repeatLimitedString("cczazcc", 3), "zzcccac");
    assert.equal(repeatLimitedString("aababab", 2), "bbabaa");
  });
});
