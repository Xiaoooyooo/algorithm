import assert from "assert";
import nextBeautifulNumber from "./nextBeautifulNumber";

describe("nextBeautifulNumber", () => {
  it("go", () => {
    assert.equal(nextBeautifulNumber(1), 22);
    assert.equal(nextBeautifulNumber(1000), 1333);
    assert.equal(nextBeautifulNumber(3000), 3133);
    assert.equal(nextBeautifulNumber(748601), 1224444);
  });
});
