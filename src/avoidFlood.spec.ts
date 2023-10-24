import assert from "assert";
import avoidFlood from "./avoidFlood";

describe("avoidFlood", () => {
  it("go", () => {
    assert.deepEqual(avoidFlood([1, 2, 3, 4]), [-1, -1, -1, -1]);
    assert.deepEqual(avoidFlood([1, 2, 0, 0, 2, 1]), [-1, -1, 2, 1, -1, -1]);
    assert.deepEqual(avoidFlood([1, 2, 0, 0, 2, 2]), []);
    assert.deepEqual(avoidFlood([1, 2, 0, 0, 2, 3, 2]), []);
    assert.deepEqual(avoidFlood([1, 2, 0, 1, 2]), []);
  });
});
