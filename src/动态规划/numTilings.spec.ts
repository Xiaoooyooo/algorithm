import assert from "assert";
import numTilings from "./numTilings";

describe("numTilings", () => {
  it("go", () => {
    assert.equal(numTilings(4), 11);
    assert.equal(numTilings(3), 5);
    assert.equal(numTilings(1), 1);
    assert.equal(numTilings(2), 2);
  });
});
