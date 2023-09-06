import assert from "assert";
import lcaDeepestLeaves from "./lcaDeepestLeaves";
import { deserialize, serialize } from "./serializeAndDeserialize";

describe("lcaDeepestLeaves", () => {
  it.only("go", () => {
    assert.equal(test("[3,5,1,6,null,null,8]"), "[3,5,1,6,null,null,8]");
    assert.equal(test("[3,5,1,6,2,0,8,null,null,7,4]"), "[2,7,4]");
    assert.equal(test("[3,5,1,6,2,0,8]"), "[3,5,1,6,2,0,8]");
    assert.equal(test("[0,1,3,null,2]"), "[2]");
    assert.equal(test("[1]"), "[1]");
  });
});

function test(str: string) {
  return serialize(lcaDeepestLeaves(deserialize(str)));
}
