/**
 *      给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

    示例 1：


    输入：head = [1,2,3,4]
    输出：[2,1,4,3]
    示例 2：

    输入：head = []
    输出：[]
    示例 3：

    输入：head = [1]
    输出：[1]

    * 
 */

var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;
    while(current.next !== null && current.next.next !== null){
       let n1 = current.next;
       let n2 = current.next.next;
       current.next = n2;
       n1.next = n2.next;
       n2.next = n1;
       current = n1;
    }
    return dummy.next;
};


var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};