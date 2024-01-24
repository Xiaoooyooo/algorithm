import assert from "assert";
import insertGreatestCommonDivisors from "./insertGreatestCommonDivisors";
import { serialize, deserialize } from "./utils";

describe("insertGreatestCommonDivisors", () => {
  it("go", () => {
    assert.equal(
      deserialize(insertGreatestCommonDivisors(serialize("[18,6,10,3]"))),
      "[18,6,6,2,10,1,3]"
    );
    assert.equal(
      deserialize(insertGreatestCommonDivisors(serialize("[7]"))),
      "[7]"
    );
  });
});
