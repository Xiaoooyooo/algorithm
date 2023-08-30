import assert from "assert";
import openLock, { openLock1 } from "./openLock";

describe("openLock", () => {
  const conf = [
    {
      deadends: ["0201", "0101", "0102", "1212", "2002"],
      target: "0202",
      expect: 6
    },
    { deadends: ["8888"], target: "0009", expect: 1 },
    { deadends: ["0000"], target: "8888", expect: -1 },
    {
      deadends: [
        "8887",
        "8889",
        "8878",
        "8898",
        "8788",
        "8988",
        "7888",
        "9888"
      ],
      target: "8888",

      expect: -1
    }
  ];
  it("BFS", () => {
    conf.forEach(({ deadends, target, expect }) => {
      assert.equal(openLock(deadends, target), expect);
    });
  });
  it("双向BFS", () => {
    conf.forEach(({ deadends, target, expect }) => {
      assert.equal(openLock1(deadends, target), expect);
    });
  });
});
