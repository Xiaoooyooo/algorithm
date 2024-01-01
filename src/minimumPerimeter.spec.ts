import assert from "assert";
import minimumPerimeter from "./minimumPerimeter";

describe("minimumPerimeter", () => {
  it("go", () => {
    assert.equal(minimumPerimeter(1), 8);
    assert.equal(minimumPerimeter(13), 16);
    assert.equal(minimumPerimeter(1000000000), 5040);
    assert.equal(minimumPerimeter(1e15), 5040);
  });
});
