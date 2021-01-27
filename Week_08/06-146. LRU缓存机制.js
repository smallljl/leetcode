/*
*

    运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

    获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
    写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。
    当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

    进阶:   

    你是否可以在 O(1) 时间复杂度内完成这两种操作？

    示例:

    LRUCache cache = new LRUCache( 2  缓存容量 );

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // 返回  1
    cache.put(3, 3);    // 该操作会使得关键字 2 作废
    cache.get(2);       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得关键字 1 作废
    cache.get(1);       // 返回 -1 (未找到)
    cache.get(3);       // 返回  3
    cache.get(4);       // 返回  4

*
*/ 


class ListNode {
    constructor(key, value) {
      this.key = key
      this.value = value
      this.next = null
      this.prev = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash[key];
    if(node == null) return -1;
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) { 
    let node = this.hash[key];
    if(node == null){
        if(this.count === this.capacity){
            this.removeLRUItem();
        }
        let newNode = new ListNode(key,value)
        this.hash[key] = newNode;
        this.addToHead(newNode);
        this.count++;
    } else {
        node.value = value;
        this.moveToHead(node);
    }
}; // test


LRUCache.prototype.moveToHead = function(node){
    this.removeFromList(node);
    this.addToHead(node);
}


LRUCache.prototype.removeFromList = function(node){
    let temp1 = node.next;
    let temp2 = node.prev;
    temp2.next = temp1;
    temp1.prev = temp2;
}

LRUCache.prototype.addToHead = function(node){
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
}

LRUCache.prototype.removeLRUItem = function(){
    let tail = this.popTail();
    delete this.hash[tail.key];
    this.count--;
}

LRUCache.prototype.popTail = function(){
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    return tail;
}