import assert from "assert";
import numOfBurgers from "./numOfBurgers";

describe("numOfBurgers", () => {
  it("go", () => {
    assert.deepEqual(numOfBurgers(16, 7), [1, 6]);
    assert.deepEqual(numOfBurgers(17, 4), []);
    assert.deepEqual(numOfBurgers(4, 17), []);
    assert.deepEqual(numOfBurgers(0, 0), [0, 0]);
    assert.deepEqual(numOfBurgers(2, 1), [0, 1]);
  });
});
