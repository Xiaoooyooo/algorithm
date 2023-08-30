import assert from "assert";
import decodeString from "./decodeString";

describe("decodeString", () => {
  it("go", () => {
    assert.equal(decodeString("abcdef"), "abcdef");
    assert.equal(decodeString("3[a]"), "aaa");
    assert.equal(decodeString("3[a2[c]2[d]]"), "accddaccddaccdd");
    assert.equal(decodeString("3[a2[c]xy2[d]]"), "accxyddaccxyddaccxydd");
    assert.equal(
      decodeString("3[a2[c]xy2[d1[a]]]"),
      "accxydadaaccxydadaaccxydada"
    );
    assert.equal(decodeString("3[a]2[bc]"), "aaabcbc");
    assert.equal(decodeString("3[a2[c]]"), "accaccacc");
    assert.equal(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
    assert.equal(decodeString("abc3[cd]xyz"), "abccdcdcdxyz");
    assert.equal(
      decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"),
      "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"
    );
  });
});
