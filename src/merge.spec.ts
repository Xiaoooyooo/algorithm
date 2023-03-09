import assert from "assert";
import merge from "./merge";

describe("merge", () => {
  it("go", () => {
    const arr1 = [1, 2, 3, 0, 0, 0];
    const arr2 = [1];
    const arr3 = [0];
    merge(arr1, 3, [2, 5, 6], 3);
    merge(arr2, 1, [], 0);
    merge(arr3, 0, [1], 1);
    assert.deepEqual(arr1, [1, 2, 2, 3, 5, 6]);
    assert.deepEqual(arr2, [1]);
    assert.deepEqual(arr3, [1]);
  });
});
