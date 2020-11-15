/**
 *  给定一个非空二叉树，返回其最大路径和。

    本题中，路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

     

    示例 1：

    输入：[1,2,3]

        1
        / \
        2   3

    输出：6
    示例 2：

    输入：[-10,9,20,null,null,15,7]

       -10
       / \
      9  20
        /  \
       15   7

    输出：42
     * 
 */


var maxPathSum = function(root) {
    if(!root) return 0;
    let ans = -Infinity;
    _maxPathSum(root,ans);
    return ans;
    
    function _maxPathSum(node){
        if(!node) return 0;
        let l = Math.max(0,_maxPathSum(node.left,ans));
        let r = Math.max(0,_maxPathSum(node.right,ans)) 
        let sum = l + r + node.val;
        ans = Math.max(ans,sum);
        return Math.max(l,r) + node.val;
    }
};