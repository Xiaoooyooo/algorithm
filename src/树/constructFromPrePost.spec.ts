import assert from "assert";
import constructFromPrePost from "./constructFromPrePost";
import { serialize } from "./serializeAndDeserialize";

describe("constructFromPrePost", () => {
  it("go", () => {
    assert.equal(
      serialize(
        constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
      ),
      "[1,2,3,4,5,6,7]"
    );
    assert.equal(serialize(constructFromPrePost([-1], [-1])), "[-1]");
  });
});
