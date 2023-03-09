import assert from "assert";
import largeGroupPositions from "./largeGroupPositions";

describe("largeGroupPositions", () => {
  it("go", () => {
    assert.deepEqual(largeGroupPositions("abc"), []);
    assert.deepEqual(largeGroupPositions("abcdddeeeeaabbbcd"), [
      [3, 5],
      [6, 9],
      [12, 14]
    ]);
  });
});
