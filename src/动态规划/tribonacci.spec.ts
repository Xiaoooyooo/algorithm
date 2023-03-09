import assert from "assert";
import tribonacci from "./tribonacci";

describe("tribonacci", () => {
  it("go", () => {
    assert.equal(tribonacci(4), 4);
    assert.equal(tribonacci(25), 1389537);
  });
});
