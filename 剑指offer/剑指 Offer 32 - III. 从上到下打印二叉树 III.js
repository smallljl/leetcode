/**
 *  请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
 *  第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
        [20,9],
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
    let zigzag = false;
    while(queue.length){
        let node = queue.shift();
        if(!node){
            if(!level.length) break; 
            if(zigzag) level.reverse();
            res.push(level.slice(0));
            level.length = 0;
            queue.push(null);
            zigzag = !zigzag;
            continue;
        }
        level.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return res;
};