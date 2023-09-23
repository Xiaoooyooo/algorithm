import assert from "assert";
import minCapability from "./minCapability";

describe("minCapability", () => {
  it("go", () => {
    assert.equal(minCapability([2, 3, 5, 9], 2), 5);
    assert.equal(minCapability([2, 7, 9, 3, 1], 2), 2);
    assert.equal(
      minCapability(
        Array(100000)
          .fill(0)
          .map((e, i) => i),
        2
      ),
      2
    );
  });
});
