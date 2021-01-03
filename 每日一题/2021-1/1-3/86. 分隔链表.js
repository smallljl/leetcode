/**
 * 给你一个链表和一个特定值 x ，请你对链表进行分隔，
 * 使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

   你应当保留两个分区中每个节点的初始相对位置。

   示例：

   输入：head = 1->4->3->2->5->2, x = 3
   输出：1->2->2->4->3->5
 * 
 */

 /**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null) return null;
    let pre = new ListNode(-1);
    let currPre = pre;
    let post = new ListNode(-1);
    let currPost = post;
    while(head){
        if(head.val < x){
           currPre.next = head;
           currPre = currPre.next;
           head = head.next;
           currPre.next = null;
        } else {
            currPost.next = head;
            currPost = currPost.next;
            head = head.next;
            currPost.next = null;
        }
       
    }
    currPre.next = post.next;
    return pre.next;
}