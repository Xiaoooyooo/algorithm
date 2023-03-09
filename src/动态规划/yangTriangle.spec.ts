import assert from "assert";
import { generate, getRow } from "./yangTriangle";

describe("yangTriangle", () => {
  it("generate", () => {
    assert.deepEqual(generate(1), [[1]]);
    assert.deepEqual(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  it("getRow", () => {
    assert.deepEqual(getRow(0), [1]);
    assert.deepEqual(getRow(1), [1, 1]);
    assert.deepEqual(getRow(3), [1, 3, 3, 1]);
  });
});
