/**
 *  输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

    例如，给出

    前序遍历 preorder = [3,9,20,15,7]
    中序遍历 inorder = [9,3,15,20,7]
    返回如下的二叉树：

        3
    / \
    9  20
        /  \
    15   7

    * 
 * 
 */
var buildTree2 = function(preorder, inorder) {
    if(!preorder.length) return null;
    let node = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));  // 左子树的前序遍历 中序遍历
    node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));  // 右子树的前序遍历 中序遍历
    return node;
};

// hash做了下优化
var buildTree = function(preorder, inorder) {
    let hash = new Map();
    for(let i = 0; i < inorder.length; i++) hash.set(inorder[i],i);

    function dfs(pl,pr,il,ir){
        if(pl > pr) return null;
        let node = new TreeNode(preorder[pl])
        let k = hash.get(preorder[pl]);
        node.left = dfs(pl+1,pl+k-il, il,k-1);  // 左子树的前序遍历 中序遍历
        node.right = dfs(pl+k-il+1,pr,k+1,ir);  // 右子树的前序遍历 中序遍历
        return node;
    }

     return dfs(0,preorder.length-1,0,inorder.length-1);
};
