/**
 *  输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

    示例1：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4

 * 
 */

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1;
            cur = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = l2;
            l2 = l2.next;
        }
    }
    if(l1) cur.next = l1;
    if(l2) cur.next = l2;
    return dummy.next;
};