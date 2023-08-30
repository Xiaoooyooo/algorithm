import assert from "assert";
import findPrimePairs from "./findPrimePairs";

describe("findPrimePairs", () => {
  it("go", () => {
    assert.deepEqual(findPrimePairs(10), [
      [3, 7],
      [5, 5]
    ]);
    assert.deepEqual(findPrimePairs(2), []);
    assert.deepEqual(findPrimePairs(1000), [
      [3, 997],
      [17, 983],
      [23, 977],
      [29, 971],
      [47, 953],
      [53, 947],
      [59, 941],
      [71, 929],
      [89, 911],
      [113, 887],
      [137, 863],
      [173, 827],
      [179, 821],
      [191, 809],
      [227, 773],
      [239, 761],
      [257, 743],
      [281, 719],
      [317, 683],
      [347, 653],
      [353, 647],
      [359, 641],
      [383, 617],
      [401, 599],
      [431, 569],
      [443, 557],
      [479, 521],
      [491, 509]
    ]);
  });
});
