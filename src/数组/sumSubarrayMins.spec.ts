import assert from "assert";
import sumSubarrayMins from "./sumSubarrayMins";

describe("sumSubarrayMins", () => {
  it("go", () => {
    assert.equal(sumSubarrayMins([3, 1, 2, 4]), 17);
    assert.equal(sumSubarrayMins([11, 81, 94, 43, 3]), 444);
  });
});
