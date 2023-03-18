import assert from "assert";
import answerQueries from "./answerQueries";

describe("answerQueries", () => {
  it("go", () => {
    assert.deepEqual(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4]);
    assert.deepEqual(answerQueries([2, 3, 4, 5], [1]), [0]);
    assert.deepEqual(
      answerQueries(
        [736411, 184882, 914641, 37925, 214915],
        [331244, 273144, 118983, 118252, 305688, 718089, 665450]
      ),
      [2, 2, 1, 1, 2, 3, 3]
    );
    assert.deepEqual(
      answerQueries(
        [469781, 45635, 628818, 324948, 343772, 713803, 452081],
        [816646, 929491]
      ),
      [3, 3]
    );
  });
});
