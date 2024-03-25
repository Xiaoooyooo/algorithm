import assert from "assert";
import minNonZeroProduct from "./minNonZeroProduct";

describe("minNonZeroProduct", () => {
  it("go", () => {
    assert.equal(minNonZeroProduct(1), 1);
    assert.equal(minNonZeroProduct(2), 6);
    assert.equal(minNonZeroProduct(3), 1512);
  });
});
