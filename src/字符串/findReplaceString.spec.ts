import assert from "assert";
import findReplaceString from "./findReplaceString";

describe("findReplaceString", () => {
  it("go", () => {
    assert.equal(
      findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]),
      "eeebffff"
    );
    assert.equal(
      findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"]),
      "eeecd"
    );
    assert.equal(
      findReplaceString("abcd", [0, 2], ["ab", "ce"], ["eee", "ffff"]),
      "eeecd"
    );
    assert.equal(
      findReplaceString(
        "vmokgggqzp",
        [3, 5, 1],
        ["kg", "ggq", "mo"],
        ["s", "so", "bfr"]
      ),
      "vbfrssozp"
    );
  });
});
