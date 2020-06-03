/*
 * @Author: your name
 * @Date: 2020-04-29 15:08:29
 * @LastEditTime: 2020-04-29 15:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_03\236. 二叉树的最近公共祖先.js
 */
/*
    给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
    最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
    例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
    示例 1:
    输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
    输出: 3
    解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
    示例 2:
    输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
    输出: 5
    解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
 */
var lowestCommonAncestor1 = function(root, p, q) {
    const _lowestCommonAncestor = (node) => {
        if(node === null || node === p || node === q)
            return node;
        let left = _lowestCommonAncestor(node.left,p,q);
        let right = _lowestCommonAncestor(node.right,p,q);
        if(left && right)
            return node;
        return left ? left : right;  // 两个钟有一个  没有就返回null
    };
    return _lowestCommonAncestor(root);
};

/**
 *   遍历，组建一个map，用来存放{键 = 节点值，值 = 父节点值}
     组建两个数组，存放p，q遍历map一路向上找到根节点的途径
     找到公共祖先
     根据公共祖先的值返回公共祖先节点
 * @param root
 * @param p
 * @param q
 */
let lowestCommonAncestor = function(root,p,q){
    let parMap = new Map();
    nodeArr = [];
    parMap.set(root.val,null);
    const travel = root => {
        if(root){
            nodeArr.push(root);
            if(root.left) parMap.set(root.left.val,root.val);
            if(root.right) parMap.set(root.right.val,root.val);
            travel(root.left);
            travel(root.right);
        }
    };
    travel(root);
};