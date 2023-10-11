// https://leetcode.cn/problems/stock-price-fluctuation/
// 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。
// 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。
// 某些情况下，有的记录可能是错的。如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。
// 请你设计一个算法，实现：
// 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
// 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
// 找到当前记录里股票的 最高价格 。
// 找到当前记录里股票的 最低价格 。
// 请你实现 StockPrice 类：
// StockPrice() 初始化对象，当前无股票价格记录。
// void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
// int current() 返回股票 最新价格 。
// int maximum() 返回股票 最高价格 。
// int minimum() 返回股票 最低价格 。

class LinkListNode {
  timestamp: number;
  price: number;
  next?: LinkListNode;
  prev?: LinkListNode;
  constructor();
  constructor(timestamp: number, price: number);
  constructor(timestamp?: number, price?: number) {
    this.timestamp = timestamp;
    this.price = price;
  }
}

export default class StockPrice {
  currentPrice: LinkListNode = null;
  map: Map<number, LinkListNode> = new Map();
  head = new LinkListNode();
  tail = new LinkListNode();
  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  update(timestamp: number, price: number): void {
    let node: LinkListNode;
    if (this.map.has(timestamp)) {
      node = this.map.get(timestamp);
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
      node.price = price;
    } else {
      node = new LinkListNode(timestamp, price);
      this.map.set(timestamp, node);
      if (!this.currentPrice || timestamp > this.currentPrice.timestamp) {
        this.currentPrice = node;
      }
    }
    this.move(node);
  }

  current(): number {
    return this.currentPrice.price;
  }

  maximum(): number {
    return this.head.next.price;
  }

  minimum(): number {
    return this.tail.prev.price;
  }

  private move(node: LinkListNode) {
    let curr = this.head;
    while (curr.next !== this.tail && node.price < curr.next.price) {
      curr = curr.next;
    }
    curr.next.prev = node;
    node.next = curr.next;
    curr.next = node;
    node.prev = curr;
  }
}
