import assert from "assert";
import { serialize, deserialize } from "./serializeAndDeserialize";
import reverseOddLevels from "./reverseOddLevels";

describe("reverseOddLevels", () => {
  it("go", () => {
    assert.equal(
      serialize(reverseOddLevels(deserialize("[2, 3, 5, 8, 13, 21, 34]"))),
      "[2,5,3,8,13,21,34]"
    );
    assert.equal(
      serialize(reverseOddLevels(deserialize("[7, 13, 11]"))),
      "[7,11,13]"
    );
    assert.equal(
      serialize(
        reverseOddLevels(deserialize("[0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]"))
      ),
      "[0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]"
    );
  });
});
