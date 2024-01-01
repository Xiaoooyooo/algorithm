import assert from "assert";
import bstToGst from "./bstToGst";
import { deserialize, serialize } from "./serializeAndDeserialize";

describe("bstToGst", () => {
  it("go", () => {
    assert.equal(
      serialize(
        bstToGst(
          deserialize("[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]")
        )
      ),
      "[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]"
    );
    assert.equal(serialize(bstToGst(deserialize("[0,null,1]"))), "[1,null,1]");
  });
});
