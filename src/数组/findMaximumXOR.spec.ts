import assert from "assert";
import findMaximumXOR from "./findMaximumXOR";

describe("findMaximumXOR", () => {
  it("go", () => {
    assert.equal(findMaximumXOR([0]), 0);
    assert.equal(findMaximumXOR([3, 10, 5, 25, 2, 8]), 28);
    assert.equal(findMaximumXOR([10, 23, 20, 18, 28]), 30);
    assert.equal(
      findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]),
      127
    );
  });
});
