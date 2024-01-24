import assert from "assert";
import removeNodes from "./removeNodes";
import { generateListFromArray, isListValueEquals } from "./utils";

describe("removeNodes", () => {
  it("go", () => {
    assert.equal(
      isListValueEquals(
        removeNodes(generateListFromArray([5, 2, 13, 3, 8])),
        generateListFromArray([13, 8])
      ),
      true
    );
    assert.equal(
      isListValueEquals(
        removeNodes(generateListFromArray([1, 1, 1, 1])),
        generateListFromArray([1, 1, 1, 1])
      ),
      true
    );
  });
});
