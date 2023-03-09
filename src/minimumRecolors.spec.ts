import assert from "assert";
import minimumRecolors from "./minimumRecolors";

describe("minimumRecolors", () => {
  it("go", () => {
    assert.equal(minimumRecolors("WBBWWBBWBW", 7), 3);
    assert.equal(minimumRecolors("WBWBBBW", 2), 0);
    assert.equal(minimumRecolors("BWWWBB", 6), 3);
  });
});
