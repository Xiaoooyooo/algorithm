import assert from "assert";
import RangeModule from "./RangeModule";

describe("RangeModule", () => {
  it("go", () => {
    let instance = new RangeModule();
    instance.addRange(10, 20);
    instance.removeRange(14, 16);
    assert.equal(instance.queryRange(10, 14), true); // 返回 true （区间 [10, 14) 中的每个数都正在被跟踪）
    // instance.print();
    assert.equal(instance.queryRange(13, 15), false); // 返回 false（未跟踪区间 [13, 15) 中像 14, 14.03, 14.17 这样的数字）
    assert.equal(instance.queryRange(16, 17), true); //返回 true （尽管执行了删除操作，区间 [16, 17) 中的数字 16 仍然会被跟踪）

    instance = new RangeModule();
    instance.addRange(6, 8);
    instance.removeRange(7, 8);
    instance.removeRange(8, 9);
    instance.addRange(8, 9);
    instance.removeRange(1, 3);
    instance.addRange(1, 8);
    assert.equal(instance.queryRange(2, 4), true);
    assert.equal(instance.queryRange(2, 9), true);
    assert.equal(instance.queryRange(4, 6), true);

    instance = new RangeModule();
    instance.addRange(1, 4);
    instance.addRange(8, 12);
    instance.addRange(5, 6);
    instance.print();
    // instance.removeRange(8, 9);
    // instance.addRange(8, 9);
    // instance.removeRange(1, 3);
    // instance.addRange(1, 8);
  });
});
