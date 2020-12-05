/**
 *  将两个升序链表合并为一个新的 升序 链表并返回。
 *  新链表是通过拼接给定的两个链表的所有节点组成的。 

    示例：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4

 * 
 */

var mergeTwoLists = function(l1, l2) {
    let head = new ListNode()
    let current = head
    while(l1 !== null && l2!== null) {
       if(l1.val<l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
             l2= l2.next
        }
        current = current.next;
    }
    if(l1!==null){
        current.next = l1;
    }
    if(l2!==null){
        current.next = l2;
    }
    return head.next;
};