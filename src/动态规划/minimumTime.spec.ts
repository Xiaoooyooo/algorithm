import assert from "assert";
import minimumTime from "./minimumTime";

describe("minimumTime", () => {
  it("go", () => {
    assert.equal(minimumTime([1, 2, 3], [1, 2, 3], 4), 3);
    assert.equal(minimumTime([1, 2, 3], [3, 3, 3], 4), -1);
  });
});
