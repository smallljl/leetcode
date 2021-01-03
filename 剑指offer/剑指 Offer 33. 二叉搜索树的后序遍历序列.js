/**
 *  输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。
 *  假设输入的数组的任意两个数字都互不相同。

    参考以下这颗二叉搜索树：

        5
       / \
      2   6
     / \
    1   3
    示例 1：

    输入: [1,6,3,2,5]
    输出: false
    示例 2：
    输入: [1,3,2,6,5]
    输出: true
 * 
 */

 /**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let seq = postorder;
    // 1 3 2 6 5  => 左 1 3 2 右 6   1 3 2 => 左 1 右 2 
    return dfs(0,seq.length-1);

    function dfs(l,r){
        if(l >= r) return true;
        let root = seq[r];
        let k = l;
        while(k < r && seq[k] < root) k++;
        for(let i = k; i < r; i++)
            if(seq[i] < root) return false;
        return dfs(l,k-1) && dfs(k,r-1);
    }
};
