import assert from "assert";
import buildTree2 from "./buildTree2";
import { serialize } from "./serializeAndDeserialize";

describe("buildTree", () => {
  it("go", () => {
    assert.equal(
      serialize(buildTree2([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])),
      "[3,9,20,null,null,15,7]"
    );
    assert.equal(serialize(buildTree2([-1], [-1])), "[-1]");
  });
});
