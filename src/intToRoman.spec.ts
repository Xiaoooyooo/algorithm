import assert from "assert";
import intToRoman from "./intToRoman";

describe("inToRoman", () => {
  it("go", () => {
    assert.equal(intToRoman(3), "III");
    assert.equal(intToRoman(15), "XV");
    assert.equal(intToRoman(90), "XC");
    assert.equal(intToRoman(1994), "MCMXCIV");
  });
});
