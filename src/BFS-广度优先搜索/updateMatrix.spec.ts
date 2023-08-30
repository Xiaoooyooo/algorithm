import assert from "assert";
import updateMatrix from "./updateMatrix";

describe("updateMatrix", () => {
  it("go", () => {
    assert.deepEqual(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]),
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]
    );
    assert.deepEqual(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
      ]),
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1]
      ]
    );
    assert.deepEqual(
      updateMatrix([
        Array(2000)
          .fill(1)
          .map((el, i) => (i === 1999 ? 0 : 1))
      ]),
      [
        Array(2000)
          .fill(0)
          .map((el, i) => 1999 - i)
      ]
    );
    assert.deepEqual(
      updateMatrix([
        Array(10000)
          .fill(1)
          .map((el, i) => (i === 9999 ? 0 : 1))
      ]),
      [
        Array(10000)
          .fill(0)
          .map((el, i) => 9999 - i)
      ]
    );
  });
});
