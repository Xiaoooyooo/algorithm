import assert from "assert";
import minExtraChar from "./minExtraChar";

describe("minExtraChar", () => {
  it("go", () => {
    assert.equal(minExtraChar("leetscode", ["leet", "code", "leetcode"]), 1);
    assert.equal(minExtraChar("sayhelloworld", ["hello", "world"]), 3);
    assert.equal(
      minExtraChar("dwmodizxvvbosxxw", [
        "ox",
        "lb",
        "diz",
        "gu",
        "v",
        "ksv",
        "o",
        "nuq",
        "r",
        "txhe",
        "e",
        "wmo",
        "cehy",
        "tskz",
        "ds",
        "kzbu"
      ]),
      7
    );
    assert.equal(
      minExtraChar("ecolloycollotkvzqpdaumuqgs", [
        "flbri",
        "uaaz",
        "numy",
        "laper",
        "ioqyt",
        "tkvz",
        "ndjb",
        "gmg",
        "gdpbo",
        "x",
        "collo",
        "vuh",
        "qhozp",
        "iwk",
        "paqgn",
        "m",
        "mhx",
        "jgren",
        "qqshd",
        "qr",
        "qpdau",
        "oeeuq",
        "c",
        "qkot",
        "uxqvx",
        "lhgid",
        "vchsk",
        "drqx",
        "keaua",
        "yaru",
        "mla",
        "shz",
        "lby",
        "vdxlv",
        "xyai",
        "lxtgl",
        "inz",
        "brhi",
        "iukt",
        "f",
        "lbjou",
        "vb",
        "sz",
        "ilkra",
        "izwk",
        "muqgs",
        "gom",
        "je"
      ]),
      2
    );
  });
});
