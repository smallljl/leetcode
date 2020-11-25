/**
 *  
 *  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

    进阶：

    你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
     

    示例 1：


    输入：head = [4,2,1,3]
    输出：[1,2,3,4]
    示例 2：


    输入：head = [-1,5,3,4,0]
    输出：[-1,0,3,4,5]
    示例 3：

    输入：head = []
    输出：[]

    * 
 * 
 */

var sortList = function(head) {

    return _mergeSortRec(head);

    function _mergeSortRec(head){
        if(!head || !head.next){
            return head;
        }
        // 获取中间节点
        let middle = _middleNode(head);
        // 分裂成两个链表
        let temp = middle.next;
        middle.next = null;  // 左边尾部置为空
        let left = head;
        let right = temp;
        // 继续分裂
        left = _mergeSortRec(left);
        right = _mergeSortRec(right);
        return _mergeTwoLists(left,right);
    }

    // 获取中间节点
    // 如果链表长度为奇数，则返回中间节点
    // 如果链表长度为偶数，则有两个中间节点，这里返回第一个
    function _middleNode(head){
        let fast = head;
        let slow = head;
        while(fast && fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // 合并两个有序链表
    function _mergeTwoLists(l1,l2){
        let preHead = new ListNode(-1);
        let cur = preHead;
        while(l1 && l2){
            if(l1.val < l2.val){
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        cur.next = l1 || l2;
        return preHead.next;
    }
};