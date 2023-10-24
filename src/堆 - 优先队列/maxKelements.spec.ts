import assert from "assert";
import maxKelements from "./maxKelements";

describe("maxKelementes", () => {
  it("go", () => {
    assert.equal(maxKelements([10, 10, 10, 10, 10], 5), 50);
    assert.equal(maxKelements([1, 10, 3, 3, 3], 3), 17);
  });
});
