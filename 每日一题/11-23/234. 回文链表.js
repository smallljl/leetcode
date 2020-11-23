/**
 * 
 *  请判断一个链表是否为回文链表。

    示例 1:

    输入: 1->2
    输出: false
    示例 2:

    输入: 1->2->2->1
    输出: true
 * 
 */

var isPalindrome = function(head) {
    const vals = [];
    while(head !== null){
        vals.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = vals.length-1;
    while(left < right){
        if(vals[left++] !== vals[right--])
            return false;
    }
    return true;
};

// 回文链表递归写法
let frontPointer;
const recursivelyCheck = (currentNode) => {
    if(currentNode !== null){
        if(!recursivelyCheck(currentNode.next)){
            return false;
        }
        if(currentNode.val !== frontPointer.val){
            return false;
        }
        frontPointer = frontPointer.next;
    }
    return true;
}

var isPalindrome = function(head) {
    frontPointer = head;
    return recursivelyCheck(head);
};

