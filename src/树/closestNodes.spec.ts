import assert from "assert";
import closestNodes from "./closestNodes";
import { deserialize } from "./serializeAndDeserialize";

describe("closestNodes", () => {
  it("go", () => {
    assert.deepEqual(
      closestNodes(
        deserialize(
          "[6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14]"
        ),
        [2, 5, 16]
      ),
      [
        [2, 2],
        [4, 6],
        [15, -1]
      ]
    );
    assert.deepEqual(closestNodes(deserialize("[4, null, 9]"), [3]), [[-1, 4]]);
    assert.deepEqual(
      closestNodes(
        deserialize("[16,8,18,1,12,null,20,null,2,9,null,null,null,null,7]"),
        [8, 14, 285508, 6]
      ),
      [
        [8, 8],
        [12, 16],
        [20, -1],
        [2, 7]
      ]
    );
  });
});
