/**
 * 
 *  给定一个二叉树，返回其节点值的锯齿形层序遍历。
 * （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

    例如：
    给定二叉树 [3,9,20,null,null,15,7],

        3
    / \
    9  20
        /  \
    15   7
    返回锯齿形层序遍历如下：

    [
    [3],
    [20,9],
    [15,7]
    ]

 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let left = true;
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        let levels = [];
        for(let i = 0; i < len; i++){
            let curr = null;
            curr = queue.shift();
            if(left){
                levels.push(curr.val);
            } else {
                levels.unshift(curr.val);
            }
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        res.push(levels);
        left = !left;
    }
    return res;
};