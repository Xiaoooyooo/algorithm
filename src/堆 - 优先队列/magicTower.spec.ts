import assert from "assert";
import magicTower from "./magicTower";

describe("magixTower", () => {
  it("go", () => {
    assert.equal(
      magicTower([100, 100, 100, -250, -60, -140, -50, -50, 100, 150]),
      1
    );
    assert.equal(magicTower([-200, -300, 400, 0]), -1);
    assert.equal(
      magicTower([
        -57551, -28755, 37891, -42178, 97380, -75158, -56308, 26293, 97655
      ]),
      -1
    );
  });
});
