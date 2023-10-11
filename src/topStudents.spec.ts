import assert from "assert";
import topStudents from "./topStudents";

describe("topStudents", () => {
  it("go", () => {
    assert.deepEqual(
      topStudents(
        ["smart", "brilliant", "studious"],
        ["not"],
        ["this student is studious", "the student is smart"],
        [1, 2],
        2
      ),
      [1, 2]
    );
    assert.deepEqual(
      topStudents(
        ["smart", "brilliant", "studious"],
        ["not"],
        ["this student is not studious", "the student is smart"],
        [1, 2],
        2
      ),
      [2, 1]
    );
  });
});
