import assert from "assert";
import minTrioDegree from "./minTrioDegree";

describe("minTrioDegree", () => {
  it("go", () => {
    assert.equal(
      minTrioDegree(6, [
        [1, 2],
        [1, 3],
        [3, 2],
        [4, 1],
        [5, 2],
        [3, 6]
      ]),
      3
    );
    assert.equal(
      minTrioDegree(7, [
        [1, 3],
        [4, 1],
        [4, 3],
        [2, 5],
        [5, 6],
        [6, 7],
        [7, 5],
        [2, 6]
      ]),
      0
    );
  });
});
