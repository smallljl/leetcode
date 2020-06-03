/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
   示例:
    输入:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    输出: 1->1->2->3->4->4->5->6
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
 * 
 */

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function arrToLinkedList(arr){
    let node = new Node(arr[0]);
    let header = node;
    for(let i = 1;i < arr.length;i++){
        node.next = new Node(arr[i]);
        node = node.next;
    }
    return header;
}

function LinkendToArr(node){
    let arr = [];
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

var mergeKLists = function(lists) {
    function _mergeTwoList(L1,L2){
        if(!L1){
            return L2;
        }
        if(!L2){
            return L1;
        }
        if(L1.val <= L2.val){
            L1.next = _mergeTwoList(L1.next,L2);
            return L1;
        }else{
            L2.next = _mergeTwoList(L1,L2.next);
            return L2;
        }
    }

    let n = lists.length
    if(n == 0) return null
    let res = lists[0]
    for(let i = 1;i < n;i++){
        if(lists[i]){
            res = _mergeTwoList(res,lists[i]);
        }
    }
    return res
};

// [[1,4,5],[1,3,4],[2,6]]
let linkedList1 = arrToLinkedList([1,4,5]);
let linkedList2 = arrToLinkedList([1,3,4]);
let linkedList3 = arrToLinkedList([2,6]);
let arr = [linkedList1,linkedList2,linkedList3];
console.log(LinkendToArr(mergeKLists(arr))); 
