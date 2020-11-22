/**
 *  对链表进行插入排序。

    插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
    每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

     

    插入排序算法：

    插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
    每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
    重复直到所有输入数据插入完为止。
     

    示例 1：

    输入: 4->2->1->3
    输出: 1->2->3->4
    示例 2：

    输入: -1->5->3->4->0
    输出: -1->0->3->4->5

 * 
 * 
 */

var insertionSortList = function(head) {
    // 边界条件
    if(head === null) return head;
    // 哨兵节点
    let preHead = new ListNode(0);
    // 将要移动重新插入链表中的元素
    let curr = head;
    // 插入链表中的前驱位置 插入pre和pre.next之间
    let pre = preHead;
    // 下一个将要移动插入的元素
    let next = null;
    // 遍历
    while(curr){
        // 保存下一个将要插入的元素
        next = curr.next;
        // 寻找插入的前驱位置
        while(pre.next && pre.next.val < curr.val){
            pre = pre.next;
        }
        // 插入
        curr.next = pre.next;
        pre.next = curr;
        // 从头或者从左到右开始遍历
        pre = preHead;
        // 下一个
        curr = next;
    }
    return preHead.next;
};