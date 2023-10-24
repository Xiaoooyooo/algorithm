import assert from "assert";
import sumOfMultiples from "./sumOfMultiples";

describe("sunOfMultlples", () => {
  it("go", () => {
    assert.equal(sumOfMultiples(7), 21);
    assert.equal(sumOfMultiples(10), 40);
    assert.equal(sumOfMultiples(9), 30);
  });
});
