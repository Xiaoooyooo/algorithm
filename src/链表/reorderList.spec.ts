import assert from "assert";
import reorderList from "./reorderList";
import { generateListFromArray as gl, isListValueEquals as eq } from "./utils";

describe("reorderList", () => {
  it("go", () => {
    const list1 = gl([1, 2, 3, 4]);
    reorderList(list1);
    assert.equal(eq(list1, gl([1, 4, 2, 3])), true);
    const list2 = gl([1, 2, 3, 4, 5]);
    reorderList(list2);
    assert.equal(eq(list2, gl([1, 5, 2, 4, 3])), true);
    const list3 = gl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    reorderList(list3);
    assert.equal(
      eq(list3, gl([1, 13, 2, 12, 3, 11, 4, 10, 5, 9, 6, 8, 7])),
      true
    );
  });
});
