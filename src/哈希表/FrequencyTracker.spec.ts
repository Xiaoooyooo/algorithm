import assert from "assert";
import FrequencyTracker from "./FrequencyTracker";

describe("FrequencyTracker", () => {
  it("go", () => {
    const instance = new FrequencyTracker();
    instance.add(1);
    instance.deleteOne(1);
    assert.equal(instance.hasFrequency(1), false);
  });
});
