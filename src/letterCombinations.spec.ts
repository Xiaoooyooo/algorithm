import assert from "assert";
import letterCombinations from "./letterCombinations";

describe("letterCombinations", () => {
  it("go", () => {
    assert.deepEqual(letterCombinations("2"), ["a", "b", "c"]);
    assert.deepEqual(letterCombinations("23").sort(), [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ]);
  });
});
