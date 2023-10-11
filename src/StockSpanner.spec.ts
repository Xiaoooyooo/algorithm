import assert from "assert";
import StockSpanner from "./StockSpanner";

describe("StockSpanner", () => {
  it("go", () => {
    let instance = new StockSpanner();
    const arr = [[100], [80], [60], [70], [60], [75], [85]];
    const ans = [1, 1, 1, 2, 1, 4, 6];
    for (let i = 0; i < arr.length; i++) {
      assert.deepEqual(instance.next(arr[i][0]), ans[i]);
    }
  });
});
