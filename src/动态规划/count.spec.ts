import assert from "assert";
import count from "./count";

describe("count", () => {
  it("go", () => {
    assert.equal(count("1", "12", 1, 8), 11);
    assert.equal(count("1", "5", 1, 5), 5);
  });
});
