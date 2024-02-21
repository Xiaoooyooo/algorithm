import assert from "assert";
import buildTree from "./buildTree";
import { serialize } from "./serializeAndDeserialize";

describe("buildTree", () => {
  it("go", () => {
    assert.equal(
      serialize(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])),
      "[3,9,20,null,null,15,7]"
    );
    assert.equal(serialize(buildTree([-1], [-1])), "[-1]");
  });
});
