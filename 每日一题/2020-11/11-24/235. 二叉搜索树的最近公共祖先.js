/**
 *  给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
    满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

    例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]



     

    示例 1:

    输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
    输出: 6 
    解释: 节点 2 和节点 8 的最近公共祖先是 6。
    示例 2:

    输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
    输出: 2
    解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 */
var lowestCommonAncestor = function(root, p, q) {
    // 都大于根节点在左边
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left,p,q);
    } 
    if(q.val > root.val && p.val > root.val){
        return lowestCommonAncestor(root.right,p,q);
    }
    return root;
};

var lowestCommonAncestor = function(root, p, q) {
    while(true){
        if(p.val === root.val)
            break;
        if(q.val === root.val)
            break;
        if(p.val < root.val && q.val < root.val)
            root = root.left;
        else if(p.val > root.val && q.val > root.val)
            root = root.right;
        else 
            break;
    }
    return root;
};


// 找节点的交点
var lowestCommonAncestor = function(root, p, q) {
    const pathP = getPath(root,p);  // 到p点的路劲
    const pathQ = getPath(root,q);  // 到q点的路劲
    let res = null;
    let i = 0;
    while(i < pathP.length && i < pathQ.length){
        if(pathP[i] === pathQ[i])
            res = pathQ[i];   // 从上往下找交点
        else 
            break;
        i++;
    }
    return res;
};


const getPath = (node,target) => {
    const path = [];
    while(node !== target){
        path.push(node);
        if(target.val < node.val){
            node = node.left;
        } else {
            node = node.right
        }
    }
    path.push(node);
    return path;
}