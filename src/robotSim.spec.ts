import assert from "assert";
import robotSim from "./robotSim";

describe("robotSim", () => {
  it("go", () => {
    assert.equal(robotSim([4, -1, 3], []), 25);
    assert.equal(robotSim([4, -1, 4, -2, 4], [[2, 4]]), 65);
  });
});
