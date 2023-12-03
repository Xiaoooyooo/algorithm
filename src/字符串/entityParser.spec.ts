import assert from "assert";
import entityParser from "./entityParser";

describe("entityParser", () => {
  it("go", () => {
    assert.equal(
      entityParser("&amp; is an HTML entity but &ambassador; is not."),
      "& is an HTML entity but &ambassador; is not."
    );
    assert.equal(
      entityParser("and I quote: &quot;...&quot;"),
      'and I quote: "..."'
    );
    assert.equal(
      entityParser("Stay home! Practice on Leetcode :)"),
      "Stay home! Practice on Leetcode :)"
    );
    assert.equal(
      entityParser("x &gt; y &amp;&amp; x &lt; y is always false"),
      "x > y && x < y is always false"
    );
    assert.equal(
      entityParser("leetcode.com&frasl;problemset&frasl;all"),
      "leetcode.com/problemset/all"
    );
  });
});
