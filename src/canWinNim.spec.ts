import assert from "assert";
import canWinNim from "./canWinNim";

describe("canWinNim", () => {
  it("go", () => {
    assert.equal(canWinNim(4), false);
    assert.equal(canWinNim(2), true);
    assert.equal(canWinNim(1), true);
  });
});
