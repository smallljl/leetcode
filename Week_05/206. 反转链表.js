/**
 * 
 *  反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-linked-list
 * 
 * 
 * 
 */
let reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(curr){
      let next = curr.next;    
      curr.next = prev;
      prev = curr
      curr = next;
  }  
  return prev;
};

// 尾递归   1 7 2 6 7
let reverseList2 = function(head){
    function letCurPointToPrev(prev, cur) { // 参数prev和cur就是函数的私有变量
        if (!cur) return prev; // cur推进到了null，结束递归，返回prev
        let next = cur.next; // 暂存cur的下一节点
        cur.next = prev;     // 让cur的next指向prev
        return letCurPointToPrev(cur, next); // 尾递归，cur推进到next，prev尾随cur
    }
    return letCurPointToPrev(null, head); // null,head分别成为prev,cur的初始值
}

let reverseList3 = function(head){
    if(head === null || head.next === null){
        return head;
    }
    let currentNode = reverseList(head.next);  // 这里状态一直反转的是5
    head.next.next = head;
    head.next = null;
    return currentNode;
}

class NodeList{
    constructor(node){
        this.node = node;
        this.next = null;
    }
}

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3)
let node4 = new NodeList(4)
let node10 = new NodeList(10);
node1.next = node2;
node2.next = node3;
node3.next = node10;
node10.next = node4;
console.log(reverseList2(node1));