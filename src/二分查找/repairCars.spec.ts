import assert from "assert";
import repairCars from "./repairCars";

describe("repairCars", () => {
  it("go", () => {
    assert.equal(
      repairCars(
        [
          17, 30, 10, 4, 3, 12, 9, 13, 2, 29, 23, 9, 17, 26, 21, 25, 13, 25, 15,
          31, 1, 23, 24, 1, 2, 20, 16, 31, 10, 26, 26, 22, 15, 15, 13, 11, 10,
          6, 12, 19, 28, 15, 18, 9, 8, 9, 18, 22, 17, 3, 16, 9, 1, 21, 18, 13,
          16, 7, 20, 9, 2, 4, 25, 19, 23, 19, 30, 7, 8, 24, 9, 23, 23, 26, 9, 9,
          10, 26, 31, 18, 13, 20, 25, 29, 8, 26, 14, 18, 21, 12, 6, 1, 31, 27,
          15, 11, 2, 29, 21, 1, 2, 30, 18, 21, 19, 18, 24, 6, 28, 14, 12, 20,
          25, 24, 19, 9, 30, 28, 27, 31, 4, 19, 11, 4, 20, 24, 12, 4, 21, 2, 31,
          11, 29, 30, 5, 18, 18, 13, 1, 8, 26, 5, 26, 5, 30, 11, 8, 29, 16, 5,
          20, 29, 14, 31, 4, 19, 22, 16, 2, 27, 22, 26, 22, 25, 6, 21, 29, 5,
          23, 17, 30, 6, 22, 26, 12, 12, 6, 3, 7, 18, 13, 30, 9, 23, 24, 7, 23,
          3, 22, 27, 19, 29, 25, 23, 4, 30, 30, 18, 26, 21, 16, 27, 4, 31, 18,
          30, 28, 6, 12, 2, 6, 15, 1, 18, 9, 11, 18, 8, 22, 24, 20, 5, 1, 16,
          24, 16, 3, 9, 7, 26, 31, 20, 21, 1, 11, 11, 11, 25, 29, 19, 12, 8, 23,
          7, 19, 26, 31, 22, 9, 10, 17, 20, 11, 12, 18, 3, 1, 30, 26, 27, 18,
          12, 27, 13, 23, 9, 31, 17, 27, 11, 21, 25, 5, 2, 10, 26, 14, 24, 10,
          9, 7, 20, 23, 27, 30, 12, 30, 4, 3, 8, 23, 12, 2, 1, 3, 3, 19, 12, 27,
          29, 22, 27, 10, 30, 7, 18, 13, 29, 15, 17, 27, 5, 22, 25, 24, 14, 15,
          4, 24, 16, 3, 25, 27, 8, 7, 15, 16, 16, 8, 8, 14, 12, 23, 20, 25, 13,
          12, 12, 1, 30, 4, 8, 15, 24, 11, 7, 19, 3, 7, 27, 5, 4, 29, 7, 9, 5,
          13, 24, 4, 4, 20, 11, 27, 3, 2, 12, 4, 11, 22, 10, 30, 31, 18, 25, 24,
          16, 31, 30, 19, 27, 31, 23, 21, 1, 21, 13, 1, 6, 27, 26, 18, 22, 11,
          15, 17, 19, 23, 8, 28, 21, 16, 15, 17, 31, 6, 20, 31, 20, 8, 26, 5,
          27, 27, 28, 30, 4, 21, 3, 6, 24, 12, 26, 7, 24, 11, 2, 18, 7, 1, 7,
          10, 3, 9, 2, 15, 24, 23, 5, 29, 20, 12, 5, 16, 7, 15, 26, 31, 5, 20,
          14, 20, 9, 26, 31, 14, 13, 8, 13, 15, 3, 5, 17, 1, 20, 23, 2, 21, 28,
          17, 9, 7, 27, 9, 2, 19, 15, 24, 10, 7, 21, 6, 11, 13, 28, 21, 5, 24,
          26, 12, 20, 6, 19, 18, 15, 11, 4, 20, 16, 18, 19, 14, 27, 17, 20, 23,
          3, 14, 28, 29, 27, 4, 13, 22, 12, 25, 18, 8, 4, 15, 29, 4, 14, 17, 4,
          25, 2, 2, 15, 26, 16, 22, 18, 10, 14, 1, 13, 5, 23, 9, 8, 7, 7, 6, 19,
          7, 7, 7, 27, 3, 14, 31, 22, 17, 1, 16, 18, 26, 21, 15, 6, 5, 23, 12,
          5, 16, 16, 13, 14, 7, 9, 20, 2, 5, 28, 14, 25, 11, 9, 13, 19, 6, 19,
          9, 15, 9, 13, 10, 12, 14, 7, 30, 23, 5, 7, 19, 28, 9, 15, 24, 14, 24,
          13, 28, 10, 30, 16, 8, 15, 21, 21, 12, 30, 3, 11, 5, 5, 27, 24, 3, 26,
          26, 10, 12, 17, 12, 22, 12, 3, 21, 10, 22, 15, 4, 20, 9, 7, 9, 31, 20,
          4, 15, 30, 29, 28, 19, 21, 21, 23, 8, 25, 18, 21, 12, 2, 8, 26, 1, 31,
          3, 4, 23, 10, 10, 26, 31, 10, 17, 17, 1, 7, 1, 7, 7, 6, 23, 15, 8, 8,
          31, 19, 8, 23, 21, 24, 21, 26, 12, 27, 22, 15, 3, 28, 15, 22, 8, 10,
          9, 28, 20, 25, 15, 17, 15, 20, 28, 8, 18, 6, 13, 9, 7, 10
        ],
        951802
      ),
      18316980
    );
    assert.equal(repairCars([4, 2, 3, 1], 10), 16);
    assert.equal(repairCars([5, 1, 8], 6), 16);
  });
});
