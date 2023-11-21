import assert from "assert";
import punishmentNumber from "./punishmentNumber";

describe("punishmentNumber", () => {
  it("go", () => {
    assert.equal(punishmentNumber(10), 182);
    assert.equal(punishmentNumber(37), 1478);
    punishmentNumber(1000);
  });
});
