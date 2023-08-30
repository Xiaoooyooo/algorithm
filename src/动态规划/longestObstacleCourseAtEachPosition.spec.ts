import assert from "assert";
import longestObstacleCourseAtEachPosition from "./longestObstacleCourseAtEachPosition";

describe("longestObstacleCourseAtEachPosition", () => {
  it("go", () => {
    assert.deepEqual(
      longestObstacleCourseAtEachPosition([1, 2, 3, 2]),
      [1, 2, 3, 3]
    );
    assert.deepEqual(longestObstacleCourseAtEachPosition([2, 2, 1]), [1, 2, 1]);
    assert.deepEqual(
      longestObstacleCourseAtEachPosition([3, 1, 5, 6, 4, 2]),
      [1, 1, 2, 3, 2, 2]
    );
    assert.deepEqual(
      longestObstacleCourseAtEachPosition([5, 1, 5, 5, 1, 3, 4, 5, 1, 4]),
      [1, 1, 2, 3, 2, 3, 4, 5, 3, 5]
    );
    assert.deepEqual(
      longestObstacleCourseAtEachPosition(
        Array(100000)
          .fill(0)
          .map((e, i) => i + 1)
      ),
      Array(100000)
        .fill(0)
        .map((e, i) => i + 1)
    );
  });
});
