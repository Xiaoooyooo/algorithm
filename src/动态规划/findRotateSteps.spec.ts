import assert from "assert";
import findRotateSteps from "./findRotateSteps";

describe("findRotateSteps", () => {
  it("go", () => {
    assert.equal(findRotateSteps("godding", "gd"), 4);
    assert.equal(findRotateSteps("godding", "godding"), 13);
    assert.equal(findRotateSteps("iotfo", "fioot"), 11);
  });
});
