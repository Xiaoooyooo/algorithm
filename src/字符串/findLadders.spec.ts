import assert from "assert";
import findLadders from "./findLadders";

describe("matrixSum", () => {
  it("go", () => {
    assert.equal(
      findLadders("hit", "cog", [
        "hot",
        "dot",
        "dog",
        "lot",
        "log",
        "cog"
      ]).reduce(
        (prev, curr, arr) => {
          if (arr.legth === 0) return { r: false }
          let { c, r } = prev;
          if (!r) return { r: false, c: "" };
          if (c === "") return { r, c: curr };
          for (let i = 0; i < curr.length; i++) {
            c = c.replace(curr[i], "");
          }
          if (c.length === 1) return { c: curr, r: true };
          return { r: false, c: "" };
        },
        { c: "", r: true }
      ).r,
      true
    );
    assert.deepEqual(
      findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
      []
    );
  });
});
