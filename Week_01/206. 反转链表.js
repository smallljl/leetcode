/*反转一个单链表。
示例:

    输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr != null){
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return prev;
};

// 递归解法
var reverseList1 = function(head){
    if(head == null || head.next == null){
        return head;
    }
    let curr = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return curr;
};

var reverseList2 = function(root){
    function _reverse(node){
        if(!node || !node.next) return node;
        if(!node.next.next){
            var temp = node.next;
            temp.next = node;
            node.next = null;
            return temp;
        } else {
            var temp = _reverse(node.next);
            node.next.next = node;
            node.next = null;
            return temp;
        }
    }
    return _reverse(root);
};
