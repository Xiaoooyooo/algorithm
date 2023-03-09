import assert from "assert";
import partitionString from "./partitionString";

describe("partitionString", () => {
  it("go", () => {
    assert.equal(partitionString("abacaba"), 4);
    assert.equal(partitionString("ssssss"), 6);
  });
});
