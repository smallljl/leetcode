/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 假设一个二叉搜索树具有如下特征：
 节点的左子树只包含小于当前节点的数。
 节点的右子树只包含大于当前节点的数。
 所有左子树和右子树自身必须也是二叉搜索树。
 示例 1:

 输入:
  2
 / \
1   3
 输出: true
 示例 2:

 输入:
  5
 / \
1   4
   / \
  3   6
 输出: false
 解释: 输入为: [5,1,4,null,null,3,6]。
      根节点的值为 5 ，但是其右子节点值为 4 。
 */


class Node {
  constructor (val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

class Tree {
  constructor (data) {
    let root = new Node(data.shift());
    // 遍历所有的数据，逐渐插入到当前这棵搜索树中去
    data.forEach(item => {
      this.insert(root, item)
    });
    return root
  }
  insert (node, data) {
    if (node.val > data) {
      if (node.left === undefined) {
        node.left = new Node(data)
      } else {
        this.insert(node.left, data)
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(data)
      } else {
        this.insert(node.right, data)
      }
    }
  }
  static walk (root) {
    if (!root.left && !root.right) {
      return true
    } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
      return false
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right)
    }
  }
}

export default Tree
export {
  Node
}
