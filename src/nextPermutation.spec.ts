import assert from "assert";

import nextPermutation from "./nextPermutation";

describe("nextPermutation", () => {
  it("go", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    const arr3 = [1, 1, 5];
    nextPermutation(arr1);
    nextPermutation(arr2);
    nextPermutation(arr3);
    assert.deepEqual(arr1, [1, 3, 2]);
    assert.deepEqual(arr2, [1, 2, 3]);
    assert.deepEqual(arr3, [1, 5, 1]);
  });
});
