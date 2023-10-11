import assert from "assert";
import StockPrice from "./StockPrice";

describe("StockPrice", () => {
  it("go", () => {
    let instance = new StockPrice();
    instance.update(1, 10);
    instance.update(2, 5);
    assert.equal(instance.current(), 5);
    assert.equal(instance.maximum(), 10);
    instance.update(1, 3);
    assert.equal(instance.maximum(), 5);
    instance.update(4, 2);
    assert.equal(instance.minimum(), 2);
  });
});
