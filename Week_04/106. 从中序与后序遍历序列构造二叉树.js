/**
 *   根据一棵树的中序遍历与后序遍历构造二叉树。
     注意:
     你可以假设树中没有重复的元素。
     例如，给出
     中序遍历 inorder = [9,3,15,20,7]
     后序遍历 postorder = [9,15,7,20,3]
     返回如下的二叉树：
         3
        / \
       9  20
         /  \
        15   7
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
 *
 *
 */
/**
 * @param {number[]} inorder   [9,3,15,20,7]   // 左根右
 * @param {number[]} postorder [9,15,7,20,3]   // 左右根
 * @return {TreeNode}
 */
function Node(val){
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
    function _f(inorder,postorder){
        if(inorder.length !== postorder.length) throw  new Error("无解");
        if(inorder.length === 0) return null;
        let nodeValue = postorder[postorder.length-1];  // 根节点
        let index = inorder.indexOf(nodeValue);
        let node = new Node(nodeValue);
        let leftInorder = inorder.slice(0,index);
        let leftPostorder = postorder.slice(0,leftInorder.length);
        node.left = _f(leftInorder,leftPostorder);
        let rightInorder = inorder.slice(index+1);
        let rightPostOrder = postorder.slice(leftPostorder.length,postorder.length-1);
        node.right = _f(rightInorder,rightPostOrder);
        return node;
    }
    return _f(inorder,postorder);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));