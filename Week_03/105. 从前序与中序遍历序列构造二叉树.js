/**
 *  根据一棵树的前序遍历与中序遍历构造二叉树。

    注意:
    你可以假设树中没有重复的元素。

    例如，给出
    前序遍历 preorder = [3,9,20,15,7]
    中序遍历 inorder = [9,3,15,20,7]
    返回如下的二叉树：
       3
      / \
     9  20
     /   \
    15    7
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 *
 */
/**
 * 根据前序遍历和中序遍历的结果，得到一颗二叉树
 * @param {Array} dlr 数组   [3,9,20,15,7]
 * @param {Array} ldr 数组   [9,3,15,20,7]
 */
function getTree(dlr, ldr) {
    //严谨性判断
    if (dlr.length !== ldr.length)
        throw new Error("无解");
    if (dlr.length === 0)
        return null;
    // 正常逻辑
    var rootValue = dlr[0]; //前序遍历的第一个就是根，得到根的值
    var root = new Node(rootValue); //创建根节点
    //加左节点
    var index = ldr.indexOf(rootValue); //根节点在中序遍历中的索引
    var leftLDR = ldr.slice(0, index); //左边的中序遍历结果
    var leftDLR = dlr.slice(1, 1 + leftLDR.length); //左边的前序遍历结果
    root.left = getTree(leftDLR, leftLDR);
    //加右节点
    var rightLDR = ldr.slice(index + 1); //右边的中序遍历结果
    var rightDLR = dlr.slice(1 + leftLDR.length);
    root.right = getTree(rightDLR, rightLDR);
    return root;
}