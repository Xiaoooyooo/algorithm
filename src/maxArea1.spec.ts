import assert from "assert";
import maxArea1 from "./maxArea1";

describe("maxArea1", () => {
  it("go", () => {
    assert.equal(maxArea1(5, 4, [1, 2, 4], [1, 3]), 4);
    assert.equal(maxArea1(5, 4, [3, 1], [1]), 6);
    assert.equal(maxArea1(5, 4, [3], [3]), 9);
    assert.equal(maxArea1(1000000000, 1000000000, [2], [2]), 81);
    assert.equal(
      maxArea1(
        985662,
        4523617,
        [1, 89, 7856, 1452, 5632, 257, 2576],
        [1, 236, 741, 657, 620, 123, 321, 745, 684, 126]
      ),
      491347878
    );
  });
});
