// https://leetcode.cn/problems/lru-cache/
// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
// 如果不存在，则向缓存中插入该组 key-value 。
// 如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 官方题解 哈希表 + 双向链表
class LinkListNode {
  key: number;
  value: number;
  prev?: LinkListNode;
  next?: LinkListNode;
  constructor();
  constructor(key: number, value: number);
  constructor(key?: number, value?: number) {
    this.key = key;
    this.value = value;
  }
}
export default class LRUCache {
  private maxSize: number;
  private size = 0;
  private cache = new Map<number, LinkListNode>();
  private head = new LinkListNode();
  private tail = new LinkListNode();
  constructor(capacity: number) {
    this.maxSize = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public get(key: number) {
    const node = this.cache.get(key);
    if (node == null) {
      return -1;
    }
    // 如果 key 存在，先通过哈希表定位，再移到头部
    this.moveToHead(node);
    return node.value;
  }

  public put(key: number, value: number) {
    const node = this.cache.get(key);
    if (node == null) {
      // 如果 key 不存在，创建一个新的节点
      const newNode = new LinkListNode(key, value);
      // 添加进哈希表
      this.cache.set(key, newNode);
      // 添加至双向链表的头部
      this.addToHead(newNode);
      this.size++;
      if (this.size > this.maxSize) {
        // 如果超出容量，删除双向链表的尾部节点
        const tail = this.removeTail();
        // 删除哈希表中对应的项
        this.cache.delete(tail.key);
        --this.size;
      }
    } else {
      // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
      node.value = value;
      this.moveToHead(node);
    }
  }

  private addToHead(node: LinkListNode) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  private removeNode(node: LinkListNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  private moveToHead(node: LinkListNode) {
    this.removeNode(node);
    this.addToHead(node);
  }

  private removeTail() {
    const res = this.tail.prev;
    this.removeNode(res);
    return res;
  }
}

// export default class LRUCache {
//   private maxSize: number;
//   private size = 0;
//   private cache = new Map<number, number>();
//   private LRU = new Set<number>();
//   constructor(capacity: number) {
//     this.maxSize = capacity;
//   }

//   get(key: number): number {
//     if (this.cache.has(key)) {
//       this.LRU.delete(key);
//       this.LRU.add(key);
//       return this.cache.get(key);
//     }
//     return -1;
//   }

//   put(key: number, value: number): void {
//     if (this.size < this.maxSize) {
//       if (this.cache.has(key)) {
//         this.LRU.delete(key);
//       } else {
//         this.size++;
//       }
//     } else {
//       if (this.cache.has(key)) {
//         this.LRU.delete(key);
//       } else {
//         const first = this.LRU.entries().next();
//         this.LRU.delete(first.value[0]);
//         this.cache.delete(first.value[0]);
//       }
//     }
//     this.LRU.add(key);
//     this.cache.set(key, value);
//   }
// }
