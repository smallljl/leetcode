/*
 * @Author: your name
 * @Date: 2020-04-30 10:11:28
 * @LastEditTime: 2020-04-30 10:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_03\面试题06. 从尾到头打印链表.js
 */
/*
    输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
    示例 1：
    输入：head = [1,3,2]
    输出：[2,3,1]
 */
var reversePrint = function(head) {
    let list = [];
    let current = head;
    while(current && current.next){
        current.next.prev = current;
        current = current.next;
    }
    while(current){
        list.push(current.val);
        current = current.prev;        
    }
    return list;
};