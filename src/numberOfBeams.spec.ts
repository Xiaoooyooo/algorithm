import assert from "assert";
import numberOfBeams from "./numberOfBeams";

describe("numberOfBeams", () => {
  it("go", () => {
    assert.equal(numberOfBeams(["011001", "000000", "010100", "001000"]), 8);
    assert.equal(numberOfBeams(["000", "111", "000"]), 0);
  });
});
