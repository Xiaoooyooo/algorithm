import assert from "assert";
import canVisitAllRooms from "./canVisitAllRooms";

describe("canVisitAllRooms", () => {
  it("go", () => {
    assert.equal(canVisitAllRooms([[1], [2], [3], []]), true);
    assert.equal(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]), false);
  });
});
