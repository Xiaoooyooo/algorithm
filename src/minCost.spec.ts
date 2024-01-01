import assert from "assert";
import minCost from "./minCost";

describe("minCost", () => {
  it("go", () => {
    assert.equal(minCost([20, 1, 15], 5), 13);
    assert.equal(minCost([1, 2, 3], 4), 6);
    assert.equal(minCost([1, 5, 3, 8, 9, 4, 12, 19, 4, 6, 13, 11], 5), 49);
    assert.equal(
      minCost([733, 200, 839, 515, 852, 615, 8, 584, 250, 337], 537),
      3188
    );
  });
});
