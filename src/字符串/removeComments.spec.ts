import assert from "assert";
import removeComments from "./removeComments";

describe("removeComments", () => {
  it("go", () => {
    assert.deepEqual(
      removeComments([
        "/*Test program */",
        "int main()",
        "{ ",
        "  // variable declaration ",
        "int a, b, c;",
        "/* This is a test",
        "   multiline  ",
        "   comment for ",
        "   testing */",
        "a = b + c;",
        "}"
      ]),
      ["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"]
    );
    assert.deepEqual(
      removeComments(["a/*comment", "line", "more_comment*/b"]),
      ["ab"]
    );
  });
});
