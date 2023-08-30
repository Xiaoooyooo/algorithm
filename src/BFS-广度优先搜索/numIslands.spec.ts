import assert from "assert";
import numIslands from "./numIslands";

describe("numIslands", () => {
  it("go", () => {
    assert.equal(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
      ]),
      1
    );
    assert.equal(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
      ]),
      3
    );
    assert.equal(
      numIslands([
        ["1", "0", "1"],
        ["0", "1", "0"],
        ["1", "0", "1"]
      ]),
      5
    );
  });
});
