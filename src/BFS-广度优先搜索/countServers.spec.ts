import assert from "assert";
import countServers from "./countServers";

describe("countServers", () => {
  it("go", () => {
    assert.equal(
      countServers([
        [1, 0],
        [0, 1]
      ]),
      0
    );
    assert.equal(
      countServers([
        [1, 0],
        [1, 1]
      ]),
      3
    );
    assert.equal(
      countServers([
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
      ]),
      4
    );
    assert.equal(
      countServers([
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ]),
      8
    );
    assert.equal(
      countServers([
        [0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 1, 1],
        [0, 0, 1, 1, 0]
      ]),
      12
    );
  });
});
