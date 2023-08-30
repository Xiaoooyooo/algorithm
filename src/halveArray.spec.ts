import assert from "assert";
import halveArray from "./halveArray";

describe("halveArray", () => {
  it("go", () => {
    assert.equal(halveArray([5, 19, 8, 1]), 3);
    assert.equal(halveArray([3, 8, 20]), 3);
    assert.equal(
      halveArray([6, 58, 10, 84, 35, 8, 22, 64, 1, 78, 86, 71, 77]),
      9
    );
    assert.equal(halveArray(Array(100000).fill(10000000)), 100000);
    assert.equal(
      halveArray([
        17, 20, 37, 28, 57, 9, 97, 96, 49, 47, 30, 12, 15, 70, 15, 13, 16, 100,
        53, 89, 64, 44, 67, 94, 97, 56, 83, 6, 8, 66, 18, 71, 26, 80, 82, 85,
        32, 45, 50, 48, 90, 7, 26, 17, 58, 96, 90, 3, 68, 30, 63, 91, 86, 98,
        61, 61, 7, 92, 70, 8, 19, 51, 18, 87, 70, 88
      ]),
      51
    );
  });
});
