import assert from "assert";
import maxEnvelopes from "./maxEnvelopes";

describe("maxEnvelopes", () => {
  it("go", () => {
    assert.equal(
      maxEnvelopes([
        [3, 2],
        [4, 1]
      ]),
      1
    );
    assert.equal(
      maxEnvelopes([
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4]
      ]),
      1
    );
    assert.equal(
      maxEnvelopes([
        [1, 1],
        [2, 2],
        [3, 1],
        [1, 4]
      ]),
      2
    );
    assert.equal(
      maxEnvelopes([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [5, 5],
        [6, 7],
        [7, 8]
      ]),
      7
    );
    assert.equal(
      maxEnvelopes([
        [4, 5],
        [4, 6],
        [6, 7],
        [2, 3],
        [1, 1]
      ]),
      4
    );
    assert.equal(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3]
      ]),
      3
    );
    assert.equal(
      maxEnvelopes([
        [1, 1],
        [1, 1],
        [1, 1]
      ]),
      1
    );

    assert.equal(
      maxEnvelopes(
        Array(10000)
          .fill(0)
          .map((e, i) => [i + 1, i + 1])
      ),
      10000
    );
    assert.equal(
      maxEnvelopes(
        Array(100000)
          .fill(0)
          .map((e, i) => [i + 1, i + 1])
      ),
      100000
    );
  });
});
