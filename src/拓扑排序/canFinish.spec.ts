import assert from "assert";
import canFinish from "./canFinish";

describe("canFinish", () => {
  it("go", () => {
    assert.equal(canFinish(2, [[1, 0]]), true);
    assert.equal(
      canFinish(2, [
        [1, 0],
        [0, 1]
      ]),
      false
    );
    assert.equal(
      canFinish(3, [
        [1, 0],
        [1, 2],
        [0, 1]
      ]),
      false
    );
  });
});
