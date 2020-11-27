/**
 * 
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
注意：本题相对原题稍作改动
示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：
给定的 k 保证是有效的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
*
*/
var kthToLast = function(head, k) {
    let left = head;
    let right = head;
    while(k-->0){ 
        right = right.next;
    }
    while(right !== null){
        right = right.next;
        left = left.next;
    }
    return left.val;
};