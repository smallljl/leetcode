/**
 *  给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3

 * 
 */

 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy;
    let cur = head;
    while(cur){
        while(cur.next && cur.val === cur.next.val) cur = cur.next;

        if(p.next != cur){
            p.next = cur.next;
        }
        else if(p.next == cur){
            p = p.next;
        }
        cur = cur.next;
    }
    return dummy.next;
};