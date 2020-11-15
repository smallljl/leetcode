/**
 *  给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。
 *  如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

    更正式地说，root.val = min(root.left.val, root.right.val) 总成立。

    给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

     

    示例 1：


    输入：root = [2,2,5,null,null,5,7]
    输出：5
    解释：最小的值是 2 ，第二小的值是 5 。
    示例 2：


    输入：root = [2,2,2]
    输出：-1
    解释：最小的值是 2, 但是不存在第二小的值。

 * 
 * 
 * 
 */
var findSecondMinimumValue = function(root) {
    let minValue = root.val;
    let res = Infinity; 
    function _dfs(node){
        if(!node) return;
        if(node.val > minValue && node.val < res){
            res = node.val;
            return;
        }
        _dfs(node.left);
        _dfs(node.right);
    }
   _dfs(root);
    return res === Infinity ? -1: res;
};


var findSecondMinimumValue = function(root){
    const minValue = root.val;
    let secodeValue = Infinity;
    const queue = [root];
    while(queue.length){
        let node = queue.shift();
        (node.val > minValue && node.val < secodeValue) &&  (secodeValue = node.val);
        (node.left) && queue.push(node.left);
        (node.right) && queue.push(node.right);
    }
    return secodeValue === Infinity ? -1 : secodeValue;
}