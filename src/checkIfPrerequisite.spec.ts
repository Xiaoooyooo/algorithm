import assert from "assert";
import checkIfPrerequisite from "./checkIfPrerequisite";

describe("checkIfPrerequisite", () => {
  it.only("go", () => {
    assert.deepEqual(
      checkIfPrerequisite(
        2,
        [[1, 0]],
        [
          [0, 1],
          [1, 0]
        ]
      ),
      [false, true]
    );
    assert.deepEqual(
      checkIfPrerequisite(
        2,
        [],
        [
          [1, 0],
          [0, 1]
        ]
      ),
      [false, false]
    );
    assert.deepEqual(
      checkIfPrerequisite(
        3,
        [
          [1, 2],
          [1, 0],
          [2, 0]
        ],
        [
          [1, 0],
          [1, 2]
        ]
      ),
      [true, true]
    );
    assert.deepEqual(
      checkIfPrerequisite(
        4,
        [
          [2, 3],
          [2, 1],
          [0, 3],
          [0, 1]
        ],
        [
          [0, 1],
          [0, 3],
          [2, 3],
          [3, 0],
          [2, 0],
          [0, 2]
        ]
      ),
      [true, true, true, false, false, false]
    );
  });
});
