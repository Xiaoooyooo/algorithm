import assert from "assert";
import minimumFuelCost from "./minimumFuelCost";

describe("minimumFuelCost", () => {
  it("go", () => {
    assert.equal(
      minimumFuelCost(
        [
          [0, 1],
          [0, 2],
          [0, 3]
        ],
        5
      ),
      3
    );
    assert.equal(
      minimumFuelCost(
        [
          [3, 1],
          [3, 2],
          [1, 0],
          [0, 4],
          [0, 5],
          [4, 6]
        ],
        2
      ),
      7
    );
    assert.equal(minimumFuelCost([], 1), 0);
  });
});
