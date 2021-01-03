/**
 *  从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 
    例如:
    给定二叉树: [3,9,20,null,null,15,7],

        3
    / \
    9  20
        /  \
    15   7
    返回：

    [3,9,20,15,7]

 * 
 */

 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) return res;
    let queue = [root];
    while(queue.length){
        let item = queue.shift();
        res.push(item.val);
        if(item.left) queue.push(item.left);
        if(item.right) queue.push(item.right);
    }
    return res;
};