import assert from "assert";
import ways from "./ways";

describe("ways", () => {
  it("go", () => {
    assert.equal(ways(["A", "A", "A"], 3), 1);
    assert.equal(ways(["A", "A", "."], 3), 0);
    assert.equal(ways(["A..", "AAA", "..."], 3), 3);
    assert.equal(ways(["A..", "AA.", "..."], 3), 1);
    assert.equal(ways(["A..", "A..", "..."], 1), 1);
    assert.equal(ways([".A", "AA", "A."], 3), 3);
    assert.equal(ways([".A..A", "A.A..", "A.AA.", "AAAA.", "A.AA."], 5), 153);
  });
});
