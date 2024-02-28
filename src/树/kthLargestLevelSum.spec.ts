import assert from "assert";
import kthLargestLevelSum from "./kthLargestLevelSum";
import { deserialize } from "./serializeAndDeserialize";

describe("kthLargesLevelSum", () => {
  it("go", () => {
    assert.equal(
      kthLargestLevelSum(deserialize("[5, 8, 9, 2, 1, 3, 7, 4, 6]"), 2),
      13
    );
    assert.equal(kthLargestLevelSum(deserialize("[1, 2, null, 3]"), 1), 3);
  });
});
