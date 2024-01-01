import assert from "assert";
import maxStudents from "./maxStudents";

describe("maxStudents", () => {
  it("go", () => {
    assert.equal(
      maxStudents([
        ["#", ".", "#", "#", ".", "#"],
        [".", "#", "#", "#", "#", "."],
        ["#", ".", "#", "#", ".", "#"]
      ]),
      4
    );
    assert.equal(
      maxStudents([
        [".", "#"],
        ["#", "#"],
        ["#", "."],
        ["#", "#"],
        [".", "#"]
      ]),
      3
    );
    assert.equal(
      maxStudents([
        ["#", ".", ".", ".", "#"],
        [".", "#", ".", "#", "."],
        [".", ".", "#", ".", "."],
        [".", "#", ".", "#", "."],
        ["#", ".", ".", ".", "#"]
      ]),
      10
    );
  });
});
