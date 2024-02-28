import assert from "assert";
import lowestCommonAncestor from "./lowestCommonAncestor";
import { deserialize } from "./serializeAndDeserialize";

describe("lowestCommonAncestor", () => {
  it("go", () => {
    assert.equal(
      lowestCommonAncestor(
        deserialize("[6,2,8,0,4,7,9,null,null,3,5]"),
        deserialize("[2]"),
        deserialize("[8]")
      ).val,
      6
    );
    assert.equal(
      lowestCommonAncestor(
        deserialize("[6,2,8,0,4,7,9,null,null,3,5]"),
        deserialize("[2]"),
        deserialize("[4]")
      ).val,
      2
    );
  });
});
