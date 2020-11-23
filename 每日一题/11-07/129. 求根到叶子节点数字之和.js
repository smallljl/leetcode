/**
 * 
 *  给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。

    例如，从根到叶子节点路径 1->2->3 代表数字 123。

    计算从根到叶子节点生成的所有数字之和。

    说明: 叶子节点是指没有子节点的节点。

    示例 1:

    输入: [1,2,3]
        1
    / \
    2   3
    输出: 25
    解释:
    从根到叶子节点路径 1->2 代表数字 12.
    从根到叶子节点路径 1->3 代表数字 13.
    因此，数字总和 = 12 + 13 = 25.
    示例 2:

    输入: [4,9,0,5,1]
        4
    / \
    9   0
     / \
    5   1
    输出: 1026
    解释:
    从根到叶子节点路径 4->9->5 代表数字 495.
    从根到叶子节点路径 4->9->1 代表数字 491.
    从根到叶子节点路径 4->0 代表数字 40.
    因此，数字总和 = 495 + 491 + 40 = 1026.

 * 
 */


var sumNumbers = function(root) {
    if(root === null) return 0;
    return _dfs(root,"");
    
    function _dfs(node,s){
        let currs = s + node.val;
        if(node.left === null && node.right === null){
            return parseInt(currs);
        }
        let leftVal = node.left ? _dfs(node.left,currs): 0 ;
        let rightVal = node.right ? _dfs(node.right,currs) : 0;
        return leftVal + rightVal;
    }
};


var sumNumbers = function(root) {
    if(root === null) return 0;
    let sum = 0;
    let nodeQueue = [root];
    let numQueue = [root.val];
    while(nodeQueue.length){
        let size = nodeQueue.length;
        for(let i = 0; i < size; i ++){
            let curr = nodeQueue.shift();
            let num = numQueue.shift();
            if(curr.left === null && curr.right === null){
                sum += num;
            }
            if(curr.left){
                nodeQueue.push(curr.left);
                numQueue.push(num * 10 + curr.left.val);
            }
            if(curr.right){
                nodeQueue.push(curr.right);
                numQueue.push(num * 10 + curr.right.val);
            }
        }
    }
    return sum;
}