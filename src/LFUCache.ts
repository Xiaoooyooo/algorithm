// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。
// 实现 LFUCache 类：
// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。
// 当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。
// 在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
// 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。
// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 官方题解 双哈希表
class Node {
  key: number;
  val: number;
  freq: number;

  prev: Node;
  next: Node;

  constructor(key = -1, val = -1, freq = 0) {
    this.key = key;
    this.val = val;
    this.freq = freq;
  }
}
class DoublyLinkedList {
  dummyHead: Node;
  dummyTail: Node;
  size: number;

  constructor() {
    this.dummyHead = new Node();
    this.dummyTail = new Node();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.size = 0;
  }

  public addFirst(node: Node) {
    const prevHead = this.dummyHead.next;
    node.prev = this.dummyHead;
    this.dummyHead.next = node;
    node.next = prevHead;
    prevHead.prev = node;
    this.size++;
  }

  public remove(node: Node) {
    const prev = node.prev,
      next = node.next;
    prev.next = next;
    next.prev = prev;
    this.size--;
  }

  public getHead() {
    return this.dummyHead.next;
  }

  public getTail() {
    return this.dummyTail.prev;
  }
}
export default class LFUCache {
  minfreq: number;
  capacity: number;
  keyTable: Map<number, Node>;
  freqTable: Map<number, DoublyLinkedList>;

  public constructor(capacity: number) {
    this.minfreq = 0;
    this.capacity = capacity;
    this.keyTable = new Map<number, Node>();
    this.freqTable = new Map<number, DoublyLinkedList>();
  }

  public get(key: number) {
    if (this.capacity == 0) {
      return -1;
    }
    if (!this.keyTable.has(key)) {
      return -1;
    }
    const node = this.keyTable.get(key);
    const val = node.val,
      freq = node.freq;
    this.freqTable.get(freq).remove(node);
    // 如果当前链表为空，我们需要在哈希表中删除，且更新minFreq
    if (this.freqTable.get(freq).size == 0) {
      this.freqTable.delete(freq);
      if (this.minfreq == freq) {
        this.minfreq += 1;
      }
    }
    // 插入到 freq + 1 中
    const list = this.freqTable.get(freq + 1) || new DoublyLinkedList();
    list.addFirst(new Node(key, val, freq + 1));
    this.freqTable.set(freq + 1, list);
    this.keyTable.set(key, this.freqTable.get(freq + 1).getHead());
    return val;
  }

  public put(key: number, value: number) {
    if (this.capacity == 0) {
      return;
    }
    if (!this.keyTable.has(key)) {
      // 缓存已满，需要进行删除操作
      if (this.keyTable.size == this.capacity) {
        // 通过 minFreq 拿到 freqTable[minFreq] 链表的末尾节点
        const node = this.freqTable.get(this.minfreq).getTail();
        this.keyTable.delete(node.key);
        this.freqTable.get(this.minfreq).remove(node);
        if (this.freqTable.get(this.minfreq).size == 0) {
          this.freqTable.delete(this.minfreq);
        }
      }
      const list = this.freqTable.get(1) || new DoublyLinkedList();
      list.addFirst(new Node(key, value, 1));
      this.freqTable.set(1, list);
      this.keyTable.set(key, this.freqTable.get(1).getHead());
      this.minfreq = 1;
    } else {
      // 与 get 操作基本一致，除了需要更新缓存的值
      const node = this.keyTable.get(key);
      const freq = node.freq;
      this.freqTable.get(freq).remove(node);
      if (this.freqTable.get(freq).size == 0) {
        this.freqTable.delete(freq);
        if (this.minfreq == freq) {
          this.minfreq += 1;
        }
      }
      const list = this.freqTable.get(freq + 1) || new DoublyLinkedList();
      list.addFirst(new Node(key, value, freq + 1));
      this.freqTable.set(freq + 1, list);
      this.keyTable.set(key, this.freqTable.get(freq + 1).getHead());
    }
  }
}

// 还有点问题
// class LinkListNode {
//   key?: number;
//   value?: number;
//   prev?: LinkListNode;
//   next?: LinkListNode;
//   constructor();
//   constructor(key: number, value: number);
//   constructor(key?: number, value?: number) {
//     this.key = key;
//     this.value = value;
//   }
// }

// class LinkList {
//   head: LinkListNode;
//   tail: LinkListNode;
//   prev?: LinkList;
//   next?: LinkList;
//   constructor() {
//     this.head = new LinkListNode();
//     this.tail = new LinkListNode();
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
// }

// export default class LFUCache {
//   private maxSize: number;
//   private size = 0;
//   private count = new Map<number, number>();
//   private cache = new Map<number, LinkListNode>();
//   private linkList = (function () {
//     const head = new LinkList(),
//       tail = new LinkList();
//     head.next = tail;
//     tail.prev = head;
//     return { head, tail };
//   })();
//   private countLinkList = new Map<number, LinkList>();
//   constructor(capacity: number) {
//     this.maxSize = capacity;
//   }

//   get(key: number): number {
//     if (this.cache.has(key)) {
//       const node = this.cache.get(key);
//       const count = this.count.get(key);
//       this.count.set(key, count + 1);
//       this.moveToHead(count, node);
//       return node.value;
//     }
//     return -1;
//   }

//   put(key: number, value: number): void {
//     if (this.cache.has(key)) {
//       const node = this.cache.get(key);
//       node.value = value;
//       const count = this.count.get(key);
//       this.count.set(key, count + 1);
//       this.moveToHead(count, node);
//     } else {
//       const node = new LinkListNode(key, value);
//       if (this.size < this.maxSize) {
//         this.size++;
//       } else {
//         this.removeTail();
//       }
//       this.count.set(key, 1);
//       this.cache.set(key, node);
//       this.moveToHead(0, node);
//     }
//   }

//   private moveToHead(prevCount: number, node: LinkListNode) {
//     const prevList = this.countLinkList.get(prevCount);
//     const newListCount = prevCount + 1;
//     let list: LinkList;
//     if (this.countLinkList.has(newListCount)) {
//       list = this.countLinkList.get(newListCount);
//     } else if (prevList) {
//       list = new LinkList();
//       list.next = prevList.next;
//       list.prev = prevList;
//       prevList.next.prev = list;
//       prevList.next = list;
//     } else {
//       list = new LinkList();
//       list.next = this.linkList.head.next;
//       list.prev = this.linkList.head;
//       this.linkList.head.next.prev = list;
//       this.linkList.head.next = list;
//     }
//     if (prevList) {
//       // 从原链表中断开
//       node.prev.next = node.next;
//       node.next.prev = node.prev;
//       if (prevList.head.next === prevList.tail) {
//         prevList.prev.next = prevList.next;
//         prevList.next.prev = prevList.prev;
//         this.countLinkList.delete(prevCount);
//       } else {
//         this.countLinkList.set(prevCount, prevList);
//       }
//     }
//     node.next = list.head.next;
//     node.prev = list.head;
//     list.head.next.prev = node;
//     list.head.next = node;
//     this.countLinkList.set(newListCount, list);
//   }

//   private removeTail() {
//     const linkList = this.linkList.head.next;
//     const node = linkList.tail.prev;
//     const count = this.count.get(node.key);
//     const countLinkList = this.countLinkList.get(count);
//     node.prev.next = linkList.tail;
//     linkList.head.prev = node.prev;
//     if (linkList.head.next === linkList.tail) {
//       linkList.prev.next = linkList.next;
//       linkList.next.prev = linkList.prev;
//       this.countLinkList.delete(count);
//     } else {
//       this.countLinkList.set(count, countLinkList);
//     }
//     this.cache.delete(node.key);
//     this.count.delete(node.key);
//   }
// }
