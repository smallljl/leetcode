/**
 *  反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 * 
 */
// var reverseList = function(head) {
//     let prev = null;
//     let curr =  head;
//     while(curr !== null){
//         let nextTemp = curr.next;  // 保存下一个节点的值
//         curr.next = prev;
//         // 后移动
//         prev = curr;
//         curr = nextTemp;
//     }
//     return prev;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null;  // 裁减 head
    next.next = head;  // 尾接
    return reverseHead
};


// 尾递归解法
var reverseList = function(head) {
    return reverse(null, head);
};

function reverse (prev, curr) {
    if (!curr) return prev;
    let tmp = curr.next;
    curr.next = prev;
    console.log(curr);
    return reverse(curr, tmp);
}

// list节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let arr = [1,2,3,4,5];
let node1 = new ListNode(arr[0]);
let node2 = new ListNode(arr[1]);
let node3 = new ListNode(arr[2]);
let node4 = new ListNode(arr[3]);
let node5 = new ListNode(arr[4]);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let l2 = reverseList(node1);
console.log(l2);