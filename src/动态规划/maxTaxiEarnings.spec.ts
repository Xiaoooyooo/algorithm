import assert from "assert";
import maxTaxiEarnings from "./maxTaxiEarnings";

describe("maxTaxiEarnings", () => {
  it("go", () => {
    assert.equal(
      maxTaxiEarnings(5, [
        [2, 5, 4],
        [1, 5, 1]
      ]),
      7
    );
    assert.equal(
      maxTaxiEarnings(20, [
        [1, 6, 1],
        [3, 10, 2],
        [10, 12, 3],
        [11, 12, 2],
        [12, 15, 2],
        [13, 18, 1]
      ]),
      20
    );
  });
});
