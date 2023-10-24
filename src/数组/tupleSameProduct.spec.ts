import assert from "assert";
import tupleSameProduct from "./tupleSameProduct";

describe("tupleSameProduct", () => {
  it("go", () => {
    assert.equal(tupleSameProduct([2, 3, 4, 6]), 8);
    assert.equal(tupleSameProduct([1, 2, 4, 5, 10]), 16);
    assert.equal(tupleSameProduct([2, 3, 4, 6, 8, 12]), 40);
    assert.equal(
      tupleSameProduct([2, 3, 4, 6, 5, 7, 9, 8, 1, 13, 16, 26, 10]),
      152
    );
  });
});
