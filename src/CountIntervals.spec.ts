import assert from "assert";
import CountIntervals from "./CountIntervals";

describe("CountIntervals", () => {
  it("go", () => {
    const instance = new CountIntervals();
    instance.add(2, 3); // 将 [2, 3] 添加到区间集合中
    instance.add(7, 10); // 将 [7, 10] 添加到区间集合中
    assert.equal(instance.count(), 6); // 返回 6
    // 整数 2 和 3 出现在区间 [2, 3] 中
    // 整数 7、8、9、10 出现在区间 [7, 10] 中
    instance.add(5, 8); // 将 [5, 8] 添加到区间集合中
    assert.equal(instance.count(), 8); // 返回 8
  });
});
