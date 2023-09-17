import assert from "assert";
import mincostTickets from "./mincostTickets";

describe("mincostTickets", () => {
  it("go", () => {
    assert.equal(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11);
    assert.equal(
      mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]),
      17
    );
  });
});
