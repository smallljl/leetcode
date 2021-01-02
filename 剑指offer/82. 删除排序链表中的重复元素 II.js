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
    // p 上一次保留的节点
    // q 下一段的第一个节点
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy;
    while(p.next){
        let q = p.next;
        while(q && p.next.val === q.val) q = q.next;
        // 节点长度为1
        if(p.next.next === q)
            p = p.next;
        else 
            p.next = q;
    } 
    return dummy.next;
};