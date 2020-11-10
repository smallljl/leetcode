/**
 * 
 *  给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

    注意：两个节点之间的路径长度由它们之间的边数表示。

    示例 1:

    输入:

                5
                / \
                4   5
            / \   \
            1   1   5
    输出:

    2
    示例 2:

    输入:

                1
                / \
                4   5
            / \   \
            4   4   5
    输出:

    2

 * 
 * 
 */
var longestUnivaluePath = function(root) {
    if(!root) return 0;
    let ans = 0;
    _longPath(root)
    return ans;
    function _longPath(node){
        if(!node) return 0;
        let l = _longPath(node.left);
        let r = _longPath(node.right);
        let leftPath = 0,rightPath = 0;
        if(node.left && node.left.val === node.val) 
            leftPath = l + 1;
        if(node.right && node.right.val === node.val)
            rightPath = r + 1;
        ans = Math.max(ans,leftPath + rightPath); 
        return Math.max(leftPath,rightPath);
    }
};