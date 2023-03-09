import assert from "assert";
import minimumOperations from "./minimumOperations";

describe("minimumOperations", () => {
  it("go", () => {
    assert.equal(minimumOperations([1, 5, 0, 3, 5]), 3);
    assert.equal(minimumOperations([0]), 0);
  });
});
