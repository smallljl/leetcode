// 声明链表的节点

/**
 * 给定一个链表，判断链表中是否有环。

 为了表示给定链表中的环，我们使用整数 pos
 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

  

 示例 1：

 输入：head = [3,2,0,-4], pos = 1
 输出：true
 解释：链表中有一个环，其尾部连接到第二个节点。


 示例 2：

 输入：head = [1,2], pos = 0
 输出：true
 解释：链表中有一个环，其尾部连接到第一个节点。

 示例 3：

 输入：head = [1], pos = -1
 输出：false
 解释：链表中没有环。
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
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

export default function isCircle (head) {
  // 慢指针
  let slow = head
  // 快指针
  let fast = head.next
  while (1) {
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export {
  Node,
  NodeList
}
