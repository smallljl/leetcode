/**
 *  反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 * 
 * 
 */

var reverseList = function(head) {
    let prev = null;
    let curr =  head;
    while(curr !== null){
        let nextTemp = curr.next;  // 保存下一个节点的值
        curr.next = prev;
        
        // 后移动
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null;  // 裁减 head
    next.next = head;  // 尾接
    return reverseHead
};