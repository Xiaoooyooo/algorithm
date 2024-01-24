import assert from "assert";
import canSeePersonsCount from "./canSeePersonsCount";

describe("canSeePersonsCount", () => {
  it("go", () => {
    assert.deepEqual(
      canSeePersonsCount([10, 6, 8, 5, 11, 9]),
      [3, 1, 2, 1, 1, 0]
    );
    assert.deepEqual(canSeePersonsCount([5, 1, 2, 3, 10]), [4, 1, 1, 1, 0]);
  });
});
