import assert from "assert";
import romanToInt from "./romanToInt";

describe("romanToInt", () => {
  it("go", () => {
    assert.equal(romanToInt("III"), 3);
    assert.equal(romanToInt("XV"), 15);
    assert.equal(romanToInt("XC"), 90);
    assert.equal(romanToInt("MCMXCIV"), 1994);
  });
});
