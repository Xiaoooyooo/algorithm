import assert from "assert";
import bubbleSort from "./bubbleSort";
import selectSort from "./selectSort";
import insertSort from "./insertSort";
import quickSort from "./quickSort";
import mergeSort from "./mergeSort";

function getRandomNumber() {
  return Math.round((parseFloat(Math.random().toFixed(2)) - 0.5) * 200);
}

function getRandomArray() {
  return Array(Math.abs(getRandomNumber()))
    .fill(undefined)
    .map(() => getRandomNumber());
}

describe("排序算法", () => {
  const arr1 = getRandomArray();
  const res1 = [...arr1].sort((a, b) => a - b);
  const arr2 = getRandomArray();
  const res2 = [...arr2].sort((a, b) => a - b);
  const arr3 = getRandomArray();
  const res3 = [...arr3].sort((a, b) => a - b);

  it("bubble sort", () => {
    assert.deepEqual(bubbleSort([...arr1]), res1);
    assert.deepEqual(bubbleSort([...arr2]), res2);
    assert.deepEqual(bubbleSort([...arr3]), res3);
  });

  it("select sort", () => {
    assert.deepEqual(selectSort([...arr1]), res1);
    assert.deepEqual(selectSort([...arr2]), res2);
    assert.deepEqual(selectSort([...arr3]), res3);
  });

  it("insert sort", () => {
    assert.deepEqual(insertSort([...arr1]), res1);
    assert.deepEqual(insertSort([...arr2]), res2);
    assert.deepEqual(insertSort([...arr3]), res3);
  });

  it("quick sort", () => {
    assert.deepEqual(quickSort([...arr1]), res1);
    assert.deepEqual(quickSort([...arr2]), res2);
    assert.deepEqual(quickSort([...arr3]), res3);
  });

  it("merge sort", () => {
    assert.deepEqual(mergeSort([...arr1]), res1);
    assert.deepEqual(mergeSort([...arr2]), res2);
    assert.deepEqual(mergeSort([...arr3]), res3);
  });
});
