/**
 * 
 *  给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。

    对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

    以 10^9 + 7 为模，返回这些数字之和。

     

    示例：



    输入：[1,0,1,0,1,0,1]
    输出：22
    解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

 * 
 * 
 */
var sumRootToLeaf = function(root) {
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
                numQueue.push((num << 1) + curr.left.val);
            }
            if(curr.right){
                nodeQueue.push(curr.right);
                numQueue.push((num << 1) + curr.right.val);
            }
        }
    }
    return sum;
};
