import assert from "assert";
import divisorGame from "./divisorGame";

describe("divisorGame", () => {
  it("go", () => {
    assert.equal(divisorGame(2), true);
    assert.equal(divisorGame(3), false);
  });
});
