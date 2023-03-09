import assert from "assert";
import minimumDeletions from "./minimumDeletions";

describe("minimumDeletions", () => {
  it("go", () => {
    assert.equal(minimumDeletions("aababbab"), 2);
    assert.equal(minimumDeletions("bbaaaaabb"), 2);
    assert.equal(
      minimumDeletions(
        "ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa"
      ),
      25
    );
  });
});
