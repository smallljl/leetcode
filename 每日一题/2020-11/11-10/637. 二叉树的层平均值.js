/**
 *  给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

    示例 1：

    输入：
        3
    / \
    9  20
        /  \
    15   7
    输出：[3, 14.5, 11]
    解释：
    第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 * 
 * 
 */

function getAverage(arr){
    if(!arr.length) return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i ++)
        sum += arr[i];
    return (sum/arr.length)
}

var averageOfLevels = function(root) {
    if(!root) return [];
    let res = [];
    let queue = [root];
    while(queue.length){
        let size = queue.length;
        let levels = [];
        for(let i = 0; i < size; i ++){
            let node = queue.shift();
            levels.push(node.val);
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }   
        res.push(getAverage(levels))
    }
    return res;
};