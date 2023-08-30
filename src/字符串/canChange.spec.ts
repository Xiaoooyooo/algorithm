import assert from "assert";
import canChange from "./canChange";

describe("canChange", () => {
  it("go", () => {
    assert.equal(canChange("_L__R__R_", "L______RR"), true);
    assert.equal(canChange("R_L_", "__LR"), false);
    assert.equal(canChange("_R", "R_"), false);
    assert.equal(canChange("_RL_", "__RL"), false);
    assert.equal(canChange("_RL_", "_RL_"), true);
    assert.equal(canChange("_LR_", "L__R"), true);
    assert.equal(canChange("_LR_", "_L_R"), true);
    assert.equal(canChange("_LR_", "_LR_"), true);
    assert.equal(canChange("_RLR_", "R_LR_"), false);
    assert.equal(canChange("_LRL_", "L_RL_"), true);
    assert.equal(canChange("_L__R__R_L", "L______RR_"), false);
  });
});
