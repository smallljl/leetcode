/**
 *  删除链表中等于给定值 val 的所有节点。

    示例:

    输入: 1->2->6->3->4->5->6, val = 6
    输出: 1->2->3->4->5
 * 
 * 
 */

var removeElements = function(head, val) {
    if(head === null) return null;

    let prev = new ListNode(0);
    prev.next = head;
    
    let cur = prev;
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return prev.next;
};