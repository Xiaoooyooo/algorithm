import assert from "assert";

import getFolderNames from "./getFolderNames";

describe("getFolderNames", () => {
  it("go", () => {
    assert.deepEqual(getFolderNames(["pes", "fifa", "gta", "pes(2019)"]), [
      "pes",
      "fifa",
      "gta",
      "pes(2019)"
    ]);
    assert.deepEqual(getFolderNames(["gta", "gta(1)", "gta", "avalon"]), [
      "gta",
      "gta(1)",
      "gta(2)",
      "avalon"
    ]);
    assert.deepEqual(
      getFolderNames([
        "onepiece",
        "onepiece(1)",
        "onepiece(2)",
        "onepiece(3)",
        "onepiece"
      ]),
      ["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece(4)"]
    );
    assert.deepEqual(getFolderNames(["wano", "wano", "wano", "wano"]), [
      "wano",
      "wano(1)",
      "wano(2)",
      "wano(3)"
    ]);
    assert.deepEqual(
      getFolderNames(["kaido", "kaido(1)", "kaido", "kaido(1)"]),
      ["kaido", "kaido(1)", "kaido(2)", "kaido(1)(1)"]
    );
  });
});
