import assert from "assert";
import minNumberOfFrogs from "./minNumberOfFrogs";

describe("minNumberOfFrogs", () => {
  it("go", () => {
    assert.equal(minNumberOfFrogs("croakcroak"), 1);
    assert.equal(minNumberOfFrogs("crcoakroak"), 2);
    assert.equal(minNumberOfFrogs("croakcrook"), -1);
  });
});
