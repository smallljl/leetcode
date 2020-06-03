/*
给定一个二叉树，返回它的中序 遍历。
示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
*/
var preorderTraversal = function(root) {
    function _preorde(node,hander){
        if(!node) return false;
        hander(node.val);
        _preorde(node.left,hander);
        _preorde(node.right,hander);
    }
    let arr = [];
    function hander(val){
        arr.push(val);
    }
    _preorde(root,hander);
    return arr;
};
