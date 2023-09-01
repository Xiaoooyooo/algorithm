import assert from "assert";
import waysToBuyPensPencils from "./waysToBuyPensPencils";

describe("waysToBuyPensPencils", () => {
  it("go", () => {
    assert.equal(waysToBuyPensPencils(20, 10, 5), 9);
    assert.equal(waysToBuyPensPencils(20, 5, 10), 9);
    assert.equal(waysToBuyPensPencils(5, 10, 10), 1);
    assert.equal(waysToBuyPensPencils(1000000, 10, 10), 5000150001);
  });
});
