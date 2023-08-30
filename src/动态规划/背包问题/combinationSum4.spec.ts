import assert from "assert";
import combinationSum4 from "./combinationSum4";

describe("combinationSum4", () => {
  it("go", () => {
    assert.equal(combinationSum4([1, 2, 3], 4), 7);
    assert.equal(combinationSum4([9], 3), 0);
    assert.equal(combinationSum4([2, 1, 3], 35), 1132436852);
  });
});
