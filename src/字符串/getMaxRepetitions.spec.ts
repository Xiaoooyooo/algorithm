import assert from "assert";
import getMaxRepetitions from "./getMaxRepetitions";

describe("getMaxRepetitions", () => {
  it("go", () => {
    assert.equal(getMaxRepetitions("acb", 4, "ab", 2), 2);
    assert.equal(getMaxRepetitions("acb", 1, "acb", 1), 1);
    assert.equal(getMaxRepetitions("aaa", 3, "aa", 1), 4);
    assert.equal(getMaxRepetitions("aaa", 20, "aaaaa", 1), 12);
    assert.equal(
      getMaxRepetitions(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        1000000,
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        1000000
      ),
      1
    );
  });
});
