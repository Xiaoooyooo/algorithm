import assert from "assert";
import maximumEvenSplit from "./maximumEvenSplit";

describe("maximumEvenSplit", () => {
  it("go", () => {
    check(maximumEvenSplit(12), [2, 4, 6])
    check(maximumEvenSplit(7), []);
    check(maximumEvenSplit(28), [6, 4, 2, 16]);
  });
});

function check(arr1: number[], arr2: number[]) {
  return assert.deepEqual(arr1.sort(), arr2.sort());
}