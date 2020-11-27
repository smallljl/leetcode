/*
 * @Author: your name
 * @Date: 2020-04-24 17:08:26
 * @LastEditTime: 2020-04-24 20:10:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_02\25. K 个一组翻转链表.js
 */
/**
 * 
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
示例：
给你这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
* 
*/

// 链表反转
function reverse(head,tail){
    let prev = null,next = null;
    while(head != tail){
        // 下一个节点
        next = head.next;
        head.next = prev;
        prev = head; // 保存前一个
        head = next;  // 后移一位
    }
    return prev
}

var reverseKGroup = function(head, k) {
    if(head == null || head.next == null) return head;

    let tail = head;

    for(let i = 0; i < k; i++){
        if(tail == null) return head;
        tail = tail.next;
    }

    let newHead = reverse(head,tail); // [head,tail)
    head.next = reverseKGroup(tail, k);  // tail = head

    return newHead;
};