import assert from "assert";
import countBits from "./countBits";

describe("countBits", () => {
  it("go", () => {
    assert.deepEqual(countBits(2), [0, 1, 1]);
    assert.deepEqual(countBits(5), [0, 1, 1, 2, 1, 2]);
  });
});
