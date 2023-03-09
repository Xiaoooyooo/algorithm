import assert from "assert";
import search from "./search";

describe("search", () => {
  it("go", () => {
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
    assert.equal(search([1], 0), -1);
    assert.equal(search([1], 1), 0);
    assert.equal(search([1, 3], 3), 1);
    assert.equal(search([3, 5, 1], 3), 0);
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 1), 5);
    assert.equal(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);
  });
});
