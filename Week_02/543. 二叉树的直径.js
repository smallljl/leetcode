/*
 * @Author: your name
 * @Date: 2020-04-26 11:04:00
 * @LastEditTime: 2020-04-26 11:04:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_02\543. 二叉树的直径.js
 */
/*
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
这条路径可能穿过也可能不穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

 

注意：两结点之间的路径长度是以它们之间边的数目表示。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
*/
var diameterOfBinaryTree = function(root) {
    var traverse = node => {
        if (!node) {
            return 0;
        }
        let left = traverse(node.left);
        let right = traverse(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    };
    traverse(root);
    return res;
}