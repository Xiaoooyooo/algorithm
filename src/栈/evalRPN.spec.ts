import assert from "assert";
import evalRPN from "./evalRPN";

describe("evalRPN", () => {
  it("go", () => {
    assert.equal(evalRPN(["2", "1", "+", "3", "*"]), 9);
    assert.equal(evalRPN(["4", "13", "5", "/", "+"]), 6);
    assert.equal(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+"
      ]),
      22
    );
  });
});
