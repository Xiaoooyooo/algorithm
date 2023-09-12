import assert from "assert";
import scheduleCourse from "./scheduleCourse";

describe("scheduleCourse", () => {
  it("go", () => {
    assert.equal(
      scheduleCourse([
        [100, 200],
        [200, 1300],
        [1000, 1250],
        [2000, 3200]
      ]),
      3
    );
    assert.equal(scheduleCourse([[1, 2]]), 1);
    assert.equal(
      scheduleCourse([
        [3, 2],
        [4, 3]
      ]),
      0
    );
    assert.equal(
      scheduleCourse([
        [5, 15],
        [3, 19],
        [6, 7],
        [2, 10],
        [5, 16],
        [8, 14],
        [10, 11],
        [2, 19]
      ]),
      5
    );
  });
});
