/**
 * 
给定一个 N 叉树，找到其最大深度。
最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
例如，给定一个 3叉树 :

我们应返回其最大深度，3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
*
*/

var maxDepth = function(root) {
    function _getMaxDepth(node){
        if(!node) return 0;
        if(node.children.length){
            let arr = [];
            for(let i = 0; i < node.children.length;i++){
                let item = node.children[i];
                arr.push(maxDepth(item));
            }
            return 1+Math.max.apply(null,arr);
        }
        return 1;
    }
    return _getMaxDepth(root);
};