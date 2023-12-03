import assert from "assert";
import pseudoPalindromicPaths from "./pseudoPalindromicPaths";
import { deserialize } from "./serializeAndDeserialize";

describe("pseudoPalindromicPaths", () => {
  it("go", () => {
    assert.equal(pseudoPalindromicPaths(deserialize("[2,3,1,3,1,null,1]")), 2);
    assert.equal(
      pseudoPalindromicPaths(
        deserialize("[2,1,1,1,3,null,null,null,null,null,1]")
      ),
      1
    );
    assert.equal(pseudoPalindromicPaths(deserialize("[9]")), 1);
  });
});
