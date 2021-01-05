/**
 *  
 *  输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
 *  从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

    示例:
    给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
    返回:

    [
        [5,4,11,2],
        [5,8,4,5]
    ]
 
 * 
 */

 /**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let path = [];
    let ans = [];
    // dfs
    function dfs(node,sum){
       if(!node) return;
       path.push(node.val);
       sum -= node.val;
       if(!node.left && !node.right && !sum) {
          ans.push(path.slice(0))
       }
       dfs(node.left,sum);
       dfs(node.right,sum);
       path.pop();
    }
  
    dfs(root,sum);
    return ans;
   
  };