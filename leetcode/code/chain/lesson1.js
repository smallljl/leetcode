// 声明链表的节点
/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

 示例 1:

 输入: 4->2->1->3
 输出: 1->2->3->4
 示例 2:

 输入: -1->5->3->4->0
 输出: -1->0->3->4->5
 */
class Node {
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表的数据结构

class NodeList {
  constructor (arr) {
    // 声明链表的头部节点
    let head = new Node(arr.shift());
    console.log(head);
    let next = head;
    arr.forEach(item => {
      next.next = new Node(item);
      next = next.next
    });
    return head
  }
}

// 交换两个节点的值
let swap = (p, q) => {
  let val = p.val;
  p.val = q.val;
  q.val = val;
};

// 寻找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val;
  let p = begin;
  let q = begin.next;
  while (q !== end) {
    if (q.val < val) {
      p = p.next;
      swap(p, q);
    }
    q = q.next;
  }
  // 让基准元素跑到中间去
  swap(p, begin);
  return p
}

export default function sort (begin, end) {
  if (begin !== end) {
    let part = partion(begin, end);
    sort(begin, part);
    sort(part.next, end);
  }
}

export {
  Node,
  NodeList
}
