import assert from "assert";
import minimumJumps from "./minimumJumps";

describe("minimumJumps", () => {
  it("go", () => {
    assert.equal(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9), 3);
    assert.equal(minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11), -1);
    assert.equal(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7), 2);
    assert.equal(
      minimumJumps([549, 693, 456, 1814, 1609], 748, 889, 545),
      1548
    );
    assert.equal(
      minimumJumps(
        [
          162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30,
          124, 193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198,
          79, 157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176, 16, 108, 111, 6,
          168, 31, 134, 164, 136, 72, 98
        ],
        29,
        98,
        80
      ),
      121
    );
    assert.equal(minimumJumps([1998], 1999, 2000, 2000), 3998);
  });
});
