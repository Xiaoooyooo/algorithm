import assert from "assert";
import LRUCache from "./LRUCache";

describe("LRUCache", () => {
  it.only("go", () => {
    let instance = new LRUCache(1);
    instance.put(1, 1);
    instance.put(1, 2);
    assert.equal(instance.get(1), 2);
    instance.put(2, 2);
    assert.equal(instance.get(2), 2);
    assert.equal(instance.get(1), -1);

    instance = new LRUCache(2);
    instance.put(1, 1); // 缓存是 {1=1}
    instance.put(2, 2); // 缓存是 {1=1, 2=2}
    assert.equal(instance.get(1), 1); // 返回 1
    instance.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    assert.equal(instance.get(2), -1); // 返回 -1 (未找到)
    instance.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    assert.equal(instance.get(1), -1); // 返回 -1 (未找到)
    assert.equal(instance.get(3), 3); // 返回 3
    assert.equal(instance.get(4), 4); // 返回 4

    instance = new LRUCache(2);
    assert.equal(instance.get(2), -1);
    instance.put(2, 6);
    assert.equal(instance.get(1), -1);
    instance.put(1, 5);
    instance.put(1, 2);
    assert.equal(instance.get(1), 2);
    assert.equal(instance.get(2), 6);
  });
});
