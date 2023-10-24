import assert from "assert";
import maxSatisfaction from "./maxSatisfaction";

describe("maxSatisfaction", () => {
  it("go", () => {
    assert.equal(maxSatisfaction([-1, -8, 0, 5, -9]), 14);
    assert.equal(maxSatisfaction([4, 3, 2]), 20);
    assert.equal(maxSatisfaction([-1, -4, -5]), 0);
    // 测试时间复杂度
    maxSatisfaction(
      Array(500)
        .fill(0)
        .map(() => Math.round(Math.random() * 1000))
    );
  });
});
