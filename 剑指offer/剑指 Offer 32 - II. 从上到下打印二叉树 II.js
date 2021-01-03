/**
 *  从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

    例如:
    给定二叉树: [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
     15   7
    返回其层次遍历结果：

    [
        [3],
        [9,20],
        [15,7]
    ]

 * 
 */

 /**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) return res;
    let queue = [root,null];
    let level = [];
    while(queue.length){
        let node = queue.shift();
        if(!node){
            if(!level.length) break; 
            res.push(level.slice(0));
            level.length = 0;
            queue.push(null);
            continue;
        }
        level.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return res;
};