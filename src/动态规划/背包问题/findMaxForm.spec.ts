import assert from "assert";
import findMaxForm from "./findMaxForm";

describe("findMaxForm", () => {
  it("go", () => {
    assert.equal(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3), 4);
    assert.equal(findMaxForm(["10", "0001", "111001", "1", "0"], 7, 7), 5);
    assert.equal(findMaxForm(["10", "0", "1"], 1, 1), 2);
    assert.equal(findMaxForm(["001", "110", "0000", "0000"], 9, 2), 3);
    assert.equal(findMaxForm(["10", "0001", "111001", "1", "0"], 3, 4), 3);
  });
});
